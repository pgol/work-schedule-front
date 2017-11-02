// @flow

function makeUsersService({dataFetcher} : {dataFetcher: Object}) {
  const unwrap = res => res.data
  return {
    getUsers() {
      return dataFetcher.get('/users').then(unwrap)
    },
    addUser(user: Object) {
      return dataFetcher.post('/users', user).then(unwrap)
    },
    getEvents() {
      return dataFetcher.get('/events').then(unwrap)
    }
  }
}

export default makeUsersService;
