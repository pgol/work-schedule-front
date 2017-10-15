import { createAction, handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import moment from 'moment'

//action creators
export const addEvent = createAction('events/schedule/ADD')
export const setView = createAction('events/view/SET')
export const setNavigation = createAction('events/navigation/SET')
//reducers
const initialState = fromJS({
  schedule: [
    { title: 'Some event', start: moment(new Date()), end: moment(new Date()).add(5, 'hour') }
  ],
  view: fromJS({
    date: new Date(),
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
  },
  [setNavigation().type]: (state, action) => {
    return state
      .set('view', fromJS({...state, date: action.payload}))
  }

}, initialState)