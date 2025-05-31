import { auth, docs } from "@/core/lib/auth-server";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .use(
    swagger({
      scalarConfig: {
        theme: "moon",
        spec: {
          url: "/api/swagger/json",
        },
      },
      autoDarkMode: true,
      documentation: {
        components: await docs.components,
        paths: await docs.getPaths(),
      },
    }),
  )
  .mount(auth.handler);

const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = handle;
export const POST = handle;
