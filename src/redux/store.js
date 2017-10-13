import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Iterable } from 'immutable';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';

import events from '../ducks/events.duck';
import users from '../ducks/user.duck';
import { watchGetUsers } from '../sagas/user.saga';

//saga setup
const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    watchGetUsers()
  ]);
}

//reducers setup
const rootReducer = combineReducers({
  events,
  users,
  form: formReducer
});

const logger = createLogger({
  stateTransformer: (state) => Iterable.isIterable(state) ? state.toJSON() : state, //for Immutable.js
});

const middlewares = [sagaMiddleware];


export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
