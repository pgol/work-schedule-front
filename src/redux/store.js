import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable';
import {Iterable} from 'immutable';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {reducer as formReducer} from 'redux-form';

import users from '../ducks/user.duck';
import day from '../ducks/day.duck'
import {watchGetUsers} from '../sagas/user.saga';
import {createHours} from '../sagas/day.saga'

//saga setup
const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    watchGetUsers()
  ]);
}

//reducers setup
const rootReducer = combineReducers({
  users,
  day,
  form: formReducer
});

const logger = createLogger({
  stateTransformer: (state) => Iterable.isIterable(state) ? state.toJSON() : state, //for Immutable.js
});

const middlewares = [sagaMiddleware, logger];


export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
