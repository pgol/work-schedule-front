import {createStore, combineReducers, applyMiddleware} from 'redux';
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

const middlewares = [sagaMiddleware, createLogger()];


export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
