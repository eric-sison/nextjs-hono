import { MyError } from '@/utils/myError';
import { Hono } from 'hono';

export const healthcheck = new Hono().get('/healthcheck', async c => {
  const somethingWentWrong = true;

  if (somethingWentWrong) {
    throw new MyError('code1', 'Something went wrong!', 401);
  }

  return c.json({ status: 'ok' });
});
