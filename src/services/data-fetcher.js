// @flow
import axios from 'axios';

function dataFetcher({baseUrl} : {baseUrl: string}) {
  return {
    get(url: string) {
      return axios.get(baseUrl + url);
    },
    post(url:string, data: Object) {
      return axios.post(baseUrl + url, data);
    }
  };
}

export default dataFetcher;
