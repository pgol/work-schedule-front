import {put} from 'redux-saga/effects'
import {addEvent} from '../ducks/day.duck'

export function* addEventSaga(events, event) {
  yield put(addEvent(events, event))
}