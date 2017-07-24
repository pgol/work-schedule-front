import { createAction, handleActions } from 'redux-actions'
import { fromJS, List, Map } from 'immutable'
import { createHours } from '../tools/date-tools'

//action creators
export const defineHours = createAction('day/hours/DEFINE')
export const addEvent = createAction('day/event/ADD')
//reducers
const initialState = Map({
  hours: Map({
    start: {hour: 7, minute: 30},
    end: {hour: 19, minute: 30},
    step: 30
  }),
  events: List([{
    start: 6,
    end: 13,
    name: 'Dinner',
    person: 'SomeOne',
    color: '#efefef'
  }, {
    start: 12,
    end: 16,
    name: 'Being awesome',
    person: 'SomeOne',
    color: 'rgb(120, 250, 240)'
  }, {
    start: 15,
    end: 19,
    name: 'Being crazy',
    person: 'SomeOne',
    color: 'rgb(254, 185, 33)'
  }])
})

export default handleActions({
  [defineHours().type]: (state, action) => {
    return state
      .set('hours', fromJS(action.payload))
  },
  [addEvent().type]: (state, action) => {
    return state
      .set('events', fromJS(List([...state.events, action.payload])))
  }

}, initialState)