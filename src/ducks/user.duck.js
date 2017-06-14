import {createAction} from 'redux-actions';
import {call, put, takeEvery} from 'redux-saga/effects';

import createDataFetcher from '../services/data-fetcher';
import createUsersService from '../services/users-service';

const usersService = createUsersService({
  dataFetcher: createDataFetcher({
    baseUrl: 'http://localhost:3002/api/v1'
  })
});

//actions
const LOAD_USERS = 'users/LOAD';
const REQUEST = 'users/REQUEST';
const RECEIVE = 'users/RECEIVE';
const ERROR = 'users/ERROR';

//action creators
export const loadUsers = createAction(LOAD_USERS);
export const requestUsers = createAction(REQUEST);
export const receiveUsers = createAction(RECEIVE);
export const errorUsers = createAction(Error(ERROR));

//sagas
export function* getUsers() {
  yield put(requestUsers());
  const users = yield call(usersService.getUsers, '/users');
  yield put(receiveUsers(users));
}

export function* watchGetUsers() {
  yield takeEvery(LOAD_USERS, getUsers);
}

//reducers
const initialState = {
  items: [],
  errors: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case RECEIVE: {
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}