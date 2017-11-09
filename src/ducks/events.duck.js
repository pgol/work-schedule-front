import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import moment from 'moment';
import axios from 'axios';

//action creators
export const addEvent = createAction('events/schedule/ADD');
export const setView = createAction('events/view/SET');
export const setNavigation = createAction('events/navigation/SET');
export const setStartEvent = createAction('events/event/date-start/SET');
export const setEndEvent = createAction('events/event/date-end/SET');
export const setNameEvent = createAction('events/event/name/SET');
export const setEvent = createAction('events/event/all/SET');

//reducers
const initialState = fromJS({
  schedule: [
    {
      name: 'Some event',
      start: moment(),
      end: moment().add(1, 'hour'),
      id: 234234
    }
  ],
  view: {
    date: moment(),
    navigation: 'month'
  },
  event: {
    start: moment(),
    end: moment(),
    name: '',
    id: 234234
  }
});

export default handleActions(
  {
    [addEvent().type]: state => {
      const newArray = fromJS([
        ...state.get('schedule').toJS(),
        state.get('event').toJS()
      ]);
      return state.set('schedule', newArray);
    },
    [setView().type]: (state, action) => {
      return state.setIn(['view', 'navigation'], action.payload);
    },
    [setNavigation().type]: (state, action) => {
      return state.setIn(['view', 'date'], action.payload);
    },
    [setNameEvent().type]: (state, action) => {
      return state.setIn(['event', 'name'], action.payload);
    },
    [setStartEvent().type]: (state, action) => {
      return state.setIn(['event', 'start'], action.payload);
    },
    [setEndEvent().type]: (state, action) => {
      return state.setIn(['event', 'end'], action.payload);
    },
    [setEvent().type]: (state, action) => {
      const schedule = state
        .get('schedule')
        .toJS()
        .map(event => {
          if (action.payload.event.id === event.id) {
            event = {
              name: action.payload.event.name,
              start: moment(action.payload.start),
              end: moment(action.payload.end)
            };
          }
          return event;
        });
      return state.set('schedule', fromJS(schedule));
    }
  },
  initialState
);
