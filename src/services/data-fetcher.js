import axios from 'axios';

function dataFetcher({baseUrl}) {
  return {
    get(url) {
      return axios.get(baseUrl + url);
    }
  };
}

export default dataFetcher;