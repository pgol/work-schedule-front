import {createAction} from 'redux-actions';

//actions
const REQUEST = 'users/REQUEST';
const RECEIVE = 'users/RECEIVE';
const ERROR = 'users/ERROR';

//action creators
export const requestUsers = createAction(REQUEST);
export const receiveUsers = createAction(RECEIVE);
export const errorUsers = createAction(Error(ERROR));

const initialState = {
  users: [],
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
        users: action.payload,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}