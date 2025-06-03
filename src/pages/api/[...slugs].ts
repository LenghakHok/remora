import { docs } from "@/core/lib/auth-config";
import { auth } from "@/server/auth";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" }).use(auth).use(
  swagger({
    scalarConfig: {
      theme: "moon",
      spec: {
        url: "/api/docs/json",
      },
    },
    path: "/docs",
    autoDarkMode: true,
    documentation: {
      components: await docs.components,
      paths: await docs.getPaths(),
    },
  }),
);

const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = handle;
export const POST = handle;
