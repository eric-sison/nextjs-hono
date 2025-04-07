import { Hono } from 'hono';
import { healthcheck } from './routes/healthcheck';
import { onError } from './middlewares/onError';

function createApp() {
  const app = new Hono().basePath('/api');

  app.onError(onError);

  const routes = [healthcheck] as const;

  routes.forEach(route => app.route('/', route));

  return app;
}

const app = createApp();

export default app;
