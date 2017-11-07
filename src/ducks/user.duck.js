import {createAction, handleActions} from 'redux-actions';
import {fromJS, List, Map} from 'immutable';

//action creators
export const loadUsers = createAction('users/LOAD');
export const requestUsers = createAction('users/REQUEST');
export const receiveUsers = createAction('users/RECEIVE');
export const errorUsers = createAction(Error('users/ERROR'));

export const submitUser = createAction('users/SUBMIT');
export const submitUserDone = createAction('users/SUBMIT_USER_DONE');

export const loginUser = createAction('users/LOGIN')
export const loginRequest = createAction('users/LOGIN_REQUEST')
export const loginComplete = createAction('users/LOGIN_COMPLETE')

//reducers
const initialState = Map({
  profile: Map({
    username: '',
    token: ''
  }),
  items: List([]),
  loading: false
});

export default handleActions({
  [requestUsers().type]: (state) => {
    return state
      .set('loading', true);
  },
  [receiveUsers().type]: (state, action) => {
    if (action.error) {
      return state
        .set('loading', false)
        .set('error', action.payload);
    }
    return state
      .set('items', fromJS(action.payload))
      .set('loading', false);
  },
  [loginRequest().type]: (state, action) => {
    return state
      .set('loading', true)
  },
  [loginComplete().type]: (state, action) => {
    if (action.error) {
      return state
        .set('loading', false)
        .set('error', action.payload)
    }
    return state
      .set('loading', false)
      .setIn(['profile', 'token'], action.payload)
  }
}, initialState);
