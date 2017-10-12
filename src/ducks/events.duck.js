import { createAction, handleActions } from 'redux-actions'
import { fromJS, List, } from 'immutable'
import moment from 'moment'
import 'moment/locale/pl'

moment.locale('pl')
//action creators
export const addEvent = createAction('events/ADD')
//reducers
const initialState = fromJS({
  events: [{ title: 'test', start: moment(new Date()), end: moment(new Date()) }]
})

export default handleActions({
  [addEvent().type]: (state, action) => {
    return state
      .set('events', fromJS([...state.get('events'), action.payload]))
  }

}, initialState)