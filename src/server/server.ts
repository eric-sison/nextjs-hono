import { Hono } from "hono";

function createApp() {
  const app = new Hono().basePath("/api");

  const routes = [] as const;

  routes.forEach((route) => app.route("/", route));

  return app;
}

const app = createApp();

export default app;
