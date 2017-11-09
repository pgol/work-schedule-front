// @flow

/**
 * Factories GET HTTP on given url
 * @param {Object} - contains fetch lib and url for HTTP request 
 */
function makeDataFetcher({
  fetch,
  baseUrl
}: {
  baseUrl: string,
  fetch: Object
}) {
  return {
    get(url: string) {
      return fetch.get(baseUrl + url);
    },
    post(url: string, body: Object) {
      return fetch.post(baseUrl + url, body);
    }
  };
}

export default makeDataFetcher;
