// @flow

function makeDataFetcher({fetch, baseUrl} : {baseUrl: string, fetch: Object}) {
  return {
    get(url: string) {
      return {
        username: 'Dizlu',
        sex: 'man',
        avatar: 'someAvatar.jpg',
        registered: new Date(),
        events: [{}]
      }
      //return axios.get(baseUrl + url);
    }
  };
}

export default makeDataFetcher;
