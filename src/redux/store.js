import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable';
import {Iterable} from 'immutable';
import {createLogger} from 'redux-logger';
import createSagaMiddleare from 'redux-saga';
import {all} from 'redux-saga/effects';
import {reducer as formReducer} from 'redux-form';

import users, {watchGetUsers} from '../ducks/user.duck';

//saga setup
const sagaMiddleware = createSagaMiddleare();
function* rootSaga() {
  yield all([
    watchGetUsers()
  ]);
}

//reducers setup
const rootReducer = combineReducers({
  users,
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
