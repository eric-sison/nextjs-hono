import { ErrorHandler } from 'hono';
import { ContentfulStatusCode } from 'hono/utils/http-status';

export const onError: ErrorHandler = (err, c) => {
  const currentStatus = 'status' in err ? err.status : c.newResponse(null).status;

  const statusCode = currentStatus !== 200 ? (currentStatus as ContentfulStatusCode) : 500;

  return c.json(err, statusCode);
};
