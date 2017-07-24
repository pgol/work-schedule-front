import {put} from 'redux-saga/effects'
import {defineHours} from '../ducks/day.duck'

export function* createHours(start, end) {
  yield put(defineHours(9, 16))
}