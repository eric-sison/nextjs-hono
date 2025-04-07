import { Hono } from 'hono';
import { healthcheck } from './routes/healthcheck';

function createApp() {
  const app = new Hono().basePath('/api');

  const routes = [healthcheck] as const;

  routes.forEach(route => app.route('/', route));

  return app;
}

const app = createApp();

export default app;
