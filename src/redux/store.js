import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable';
import createSagaMiddleare from 'redux-saga';
import {reducer as formReducer} from 'redux-form';

import users from '../ducks/user.duck';
import rootSaga from '../sagas';

//saga setup
const sagaMiddleware = createSagaMiddleare();


//reducers setup
const rootReducer = combineReducers({
  users,
  form: formReducer
});

const middlewares = [sagaMiddleware];


export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
