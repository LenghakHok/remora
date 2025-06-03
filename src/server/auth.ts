import { auth as betterAuth } from "@/core/lib/auth-config";
import Elysia from "elysia";

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
