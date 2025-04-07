import { hc } from 'hono/client';
import { healthcheck } from '../routes/healthcheck';

export const $healthcheck = hc<typeof healthcheck>('/api');
