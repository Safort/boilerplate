type REQUEST = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'DELETE';

interface RequestParams {
  headers: Record<string, string>;
  body: string | Record<string, unknown>;
}

async function request(
  reqMethod: REQUEST,
  url: string,
  otherData?: RequestParams,
): Promise<unknown> {
  const method = reqMethod || 'GET';
  const headers = otherData?.headers || {};
  const body = otherData?.body || null;
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  const requestConfig: RequestInit = {
    method,
    credentials: 'include',
    headers: defaultHeaders,
  };

  if (body !== null) {
    requestConfig.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(url, requestConfig);
    const contentType = res.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
      return res.json();
    }
    return res;
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    return Promise.reject(err);
  }
}

function get(url: string, otherData: RequestParams): Promise<unknown> {
  return request('GET', url, otherData);
}

function post(url: string, otherData: RequestParams): Promise<unknown> {
  return request('POST', url, otherData);
}

function put(url: string, otherData: RequestParams): Promise<unknown> {
  return request('PUT', url, otherData);
}

function remove(url: string, otherData: RequestParams): Promise<unknown> {
  return request('DELETE', url, otherData);
}

export { get, post, put, remove };

export default request;
