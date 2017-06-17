function usersService({dataFetcher}) {
  const unwrap = res => res.data;
  return {
    getUsers() {
      return dataFetcher.get('/users').then(unwrap);
    },
    addUser(user) {
      return dataFetcher.post('/users', user).then(unwrap);
    }
  }
}

export default usersService;
