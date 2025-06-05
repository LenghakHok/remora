import { defineMiddleware, sequence } from "astro:middleware";
import { auth as betterAuth } from "~@/lib/auth-config";

const ignored = ["/", "/api", "/svg"];

const auth = defineMiddleware(async (context, next) => {
  const session = await betterAuth.api.getSession({
    headers: context.request.headers,
  });
  // session will already asserted to not null since we have checked
  context.locals.session = session;

  if (
    ignored.some(
      (url) =>
        context.originPathname !== "/" &&
        context.originPathname.startsWith(url),
    )
  ) {
    return next();
  }

  if (!context.originPathname.startsWith("/auth") && session === null) {
    return context.redirect("/auth/sign-in");
  }

  if (context.originPathname.startsWith("/auth") && session !== null) {
    return context.redirect("/home");
  }

  if (context.originPathname === "/" && session !== null) {
    return context.redirect("/home");
  }

  return next();
});

export const onRequest = sequence(auth);
