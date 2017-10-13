import { createAction, handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import moment from 'moment'
import 'moment/locale/pl'

//set moment.js locale
moment.locale('pl')
//action creators
export const addEvent = createAction('events/ADD')
//reducers
const initialState = fromJS(
  [
    { title: 'Event', start: moment(new Date()), end: moment(new Date()) }
  ]
)

export default handleActions({
  [addEvent().type]: (state, action) => {
    return state
      .set('events', fromJS([...state.get('events'), action.payload]))
  }

}, initialState)