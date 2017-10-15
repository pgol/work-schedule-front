// @flow
import axios from 'axios';

function dataFetcher({baseUrl} : {baseUrl: string}) {
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

export default dataFetcher;