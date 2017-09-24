import makeDataFetcher from './data-fetcher';

describe('dataFetcher', () => {
  test('can be called', () => {
    makeDataFetcher({fetch: {}, baseUrl: 'test'});
  });

  test('build full url for calling endpoints', () => {
    const baseUrl = 'https://base.url';
    const resource = '/users';
    const fetch = {
      get: jest.fn(),
      post: jest.fn()
    };
    const fetcher = makeDataFetcher({
      baseUrl,
      fetch
    });
    fetcher.get(resource);

    expect(fetch.get).toBeCalledWith(baseUrl + resource);
    fetcher.post(resource, {});

    expect(fetch.post).toBeCalledWith(baseUrl + resource, {});
  });

  test('pass object when posting data', () => {
    const baseUrl = 'https://base.url';
    const resource = '/users';
    const fetch = {
      post: jest.fn()
    };
    const fetcher = makeDataFetcher({
      baseUrl,
      fetch
    });
    const dataToSend = {
      login: 'test'
    };
    fetcher.post(resource, dataToSend);

    expect(fetch.post).toBeCalledWith(baseUrl + resource, dataToSend);
  });
});
