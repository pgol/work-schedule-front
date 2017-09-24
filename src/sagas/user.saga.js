import {call, put, takeEvery, all} from 'redux-saga/effects';

import {requestUsers, receiveUsers, loadUsers, submitUser, submitUserDone} from '../ducks/user.duck';
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
  try {
    const users = yield call(usersService.getUsers);
    yield put(receiveUsers(users));
  } catch(error) {
    yield put(receiveUsers(error));
  }
}

export function* watchGetUsers() {
  yield takeEvery(loadUsers().type, getUsers);
}

export function* createUser({payload}) {
  try {
    yield call(usersService.addUser, payload);
    yield put(loadUsers());
    yield put(submitUserDone());
  } catch(error) {
    //TODO show some general error notification
    console.error(error);
  }
}


export function* watchSubmitUser() {
  yield takeEvery(submitUser().type, createUser)
}

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchSubmitUser()
  ]);
}
