import { createAction, handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import moment from 'moment'
import 'moment/locale/pl'

//set moment.js locale
moment.locale('pl')
//action creators
export const addEvent = createAction('events/schedule/ADD')
export const setView = createAction('events/view/SET')
//reducers
const initialState = fromJS({
  schedule: [
    { title: 'Event', start: moment(new Date()), end: moment(new Date()).add(4, 'hour') }
  ],
  view: fromJS({
    now: 'month'
  })
})

export default handleActions({
  [addEvent().type]: (state, action) => {
    return state
      .set('schedule', fromJS([...state.get('schedule'), action.payload]))
  },
  [setView().type]: (state, action) => {
    return state
      .set('view', fromJS({...state, now: action.payload}))
  }

}, initialState)