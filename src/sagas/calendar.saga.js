import { put } from 'redux-saga/effects';
import { addEvent } from '../ducks/day.duck';

/**
 * Simple saga for adding event
 * @param {Object} events all events in calendar
 * @param {Object} event single event to be added to calendar
 */
export function* addEventSaga(events, event) {
  yield put(addEvent(events, event));
}
