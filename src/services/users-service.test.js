import makeUsersService from './users-service';
describe('usersService', () => {
  test('unwraps data response', async () => {
    const dataFetcher = {
      get: jest.fn(() => Promise.resolve({
        data: 'data'
      }))
    };
    const usersService = makeUsersService({dataFetcher});
    const res = await usersService.getUsers();

    expect(res).toEqual('data');
  })
});
