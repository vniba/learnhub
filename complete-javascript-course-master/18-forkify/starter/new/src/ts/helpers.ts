import { TIMEOUT_SEC } from './config';

interface Response {
  readonly body: ReadableStream<Uint8Array> | null;
  readonly bodyUsed: boolean;
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
  error(): Response;
  redirect(url: string, status?: number): Response;
}


const timeout = function (s: number) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url: string) {
  try {
    const res= await Promise.race([fetch(`${url}`), timeout(TIMEOUT_SEC)])! as Response;
    const data = await res.json();
    if (!res.ok) {
      throw new Error('error fetching data');
    }
    return data;
  } catch (error) {
    throw error;
  }
};
