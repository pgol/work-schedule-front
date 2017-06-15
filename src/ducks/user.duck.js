import {createAction, handleActions} from 'redux-actions';
import {call, put, takeEvery} from 'redux-saga/effects';

import createDataFetcher from '../services/data-fetcher';
import createUsersService from '../services/users-service';

const usersService = createUsersService({
  dataFetcher: createDataFetcher({
    baseUrl: 'http://localhost:3002/api/v1'
  })
});

//action creators
export const loadUsers = createAction('users/LOAD');
export const requestUsers = createAction('users/REQUEST');
export const receiveUsers = createAction('users/RECEIVE');
export const errorUsers = createAction(Error('users/ERROR'));

//sagas
export function* getUsers() {
  yield put(requestUsers());
  const users = yield call(usersService.getUsers, '/users');
  yield put(receiveUsers(users));
}

export function* watchGetUsers() {
  yield takeEvery(loadUsers().type, getUsers);
}

//reducers
const initialState = {
  items: [],
  errors: [],
  loading: false
};

export default handleActions({
    [requestUsers().type]: (state) => {
        return {
            ...state,
            loading: true
        };
    },
    [receiveUsers().type]: (state, action) => {
        return {
            ...state,
            items: action.payload,
            loading: false
        }
    }
}, initialState);
