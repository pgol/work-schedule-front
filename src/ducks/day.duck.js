import {createAction, handleActions} from 'redux-actions';
import {fromJS, List, Map} from 'immutable';
import {createHours} from '../tools/tools'

//action creators
export const defineHours = createAction('day/hours/DEFINE')

//reducers
const initialState = Map({
  hours: Map({
    start: {hour: 7, minute: 30},
    end: {hour: 16, minute: 0},
    step: 30
  }),
  events: List([])
})

export default handleActions({
  [defineHours().type]: (state, action) => {
    let data = action.payload
    let hours = createHours(data.start, data.end, data.step)
    return state
      .set('hours', fromJS(hours))
  }
}, initialState)