// @flow

function makeUsersService({dataFetcher}) {
  const unwrap = res => res.data;
  return {
    getUsers() {
      return dataFetcher.get('/users').then(unwrap);
    },
    addUser(user: Object) {
      return dataFetcher.post('/users', user).then(unwrap);
    }
  }
}

export default makeUsersService;
