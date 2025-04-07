import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

export const healthcheck = new Hono().get('/healthcheck', async c => {
  const somethingWentWrong = true;

  if (somethingWentWrong) {
    throw new HTTPException(401, { message: 'Custom error message' });
  }

  return c.json({ status: 'ok' });
});
