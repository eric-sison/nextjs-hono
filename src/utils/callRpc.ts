import { ClientResponse } from 'hono/client';
import { MyError } from './myError';

type RpcResponse<T> = {
  data: T | null;
  error: MyError | null;
};

export const callRpc = async <T>(rpc: Promise<ClientResponse<T>>): Promise<RpcResponse<T> | undefined> => {
  try {
    const data = await rpc;

    if (!data.ok) {
      console.log('There is an error!');
      return;
    }

    const res = await data.json();
    return { data: res as T, error: null };
  } catch (error) {
    if (error instanceof MyError) {
      console.log(error.code, '<====');
      return { data: null, error };
    }
  }
};
