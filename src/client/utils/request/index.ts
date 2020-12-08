type REQUEST = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'DELETE';

function request(reqMethod: REQUEST, url: string, otherData?: any) {
  const method = reqMethod || 'GET';
  const headers = otherData.headers || {};
  const body = otherData.body || null;
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

  return fetch(url, requestConfig)
    .then((res) => {
      const contentType = res.headers.get('content-type');

      if (contentType && contentType.indexOf('application/json') !== -1) {
        return res.json();
      }

      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

function get(url: string, otherData: unknown) {
  return request('GET', url, otherData);
}

function post(url: string, otherData: unknown) {
  return request('POST', url, otherData);
}

function put(url: string, otherData: unknown) {
  return request('PUT', url, otherData);
}

function remove(url: string, otherData: unknown) {
  return request('DELETE', url, otherData);
}

export default request;
export { get, post, put, remove };
