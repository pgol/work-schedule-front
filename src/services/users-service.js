function usersService({dataFetcher}) {
  const unwrap = res => res.data;
  return {
    getUsers() {
      return dataFetcher.get('/users').then(unwrap);
    }
  }
}

export default usersService;