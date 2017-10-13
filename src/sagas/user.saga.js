import {call, put, takeEvery} from 'redux-saga/effects';

import {requestUsers, receiveUsers, loadUsers} from '../ducks/user.duck';
import createDataFetcher from '../services/data-fetcher';
import createUsersService from '../services/users-service';

const usersService = createUsersService({
  dataFetcher: createDataFetcher({
    baseUrl: 'http://localhost:3002/api/v1'
  })
});

//sagas
export function* getUsers() {
  yield put(requestUsers());
  const users = yield call(usersService.getUsers, '/users');
  yield put(receiveUsers(users));
}

export function* watchGetUsers() {
  //yield takeEvery(loadUsers().type, getUsers);
}
