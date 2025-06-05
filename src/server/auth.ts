import Elysia from "elysia";
import { auth as betterAuth } from "~@/lib/auth-config";

const auth = new Elysia({ name: "auth", prefix: "/auth" })
  .mount(betterAuth.handler)
  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await betterAuth.api.getSession({
          headers,
        });

        if (!session) {
          return status(401);
        }

        return {
          user: session.user,
          session: session.session,
        };
      },
    },
  });

export { auth };
