// @flow
import axios from 'axios';

function dataFetcher({baseUrl} : {baseUrl: string}) {
  return {
    get(url: string) {
      return axios.get(baseUrl + url);
    }
  };
}

export default dataFetcher;