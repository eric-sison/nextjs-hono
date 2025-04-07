import { ClientResponse } from 'hono/client';

export const callRpc = async <T>(
  rpc: Promise<ClientResponse<T>>,
): Promise<{ data: T; error: null } | { data: null; error: string }> => {
  try {
    const data = await rpc;

    if (!data.ok) {
      const res = await data.text();
      return { data: null, error: res };
    }

    const res = await data.json();
    return { data: res as T, error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
};
