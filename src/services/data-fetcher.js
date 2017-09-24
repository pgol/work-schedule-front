// @flow

function makeDataFetcher({fetch, baseUrl} : {baseUrl: string, fetch: Object}) {
  return {
    get(url: string): Promise {
      return fetch.get(baseUrl + url);
    },
    post(url:string, data: Object): Promise {
      return fetch.post(baseUrl + url, data);
    }
  };
}

export default makeDataFetcher;
