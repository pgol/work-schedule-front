import {call, put, takeEvery} from 'redux-saga/effects'

import {defineHours} from '../ducks/day.duck'

export function* createHours(start, end) {
  yield put(defineHours(start, end))
}