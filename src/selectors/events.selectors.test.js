import { getEvents, getView } from './events.selectors'
import { fromJS } from 'immutable'
import moment from 'moment'

describe('SELECTORS::Events', () => {
  describe('getEvents', () => {
    it('fetches state with one event', () => {
      const state = fromJS({
        events: {
          schedule: [{ name: 'Event', start: moment(new Date()), end: moment(new Date()) }]
        }
      })
    
      const selected = getEvents(state)
      expect(selected.length).toBe(1)
      expect(selected[0].name).toBe('Event')
      expect(selected[0].start.toDate()).toBeDefined()
      expect(selected[0].end.toDate()).toBeDefined()
    })
    it('fetches empty events object', () => {
      const state = fromJS({
        events: {
          schedule: []
        }
      })
  
      const selected = getEvents(state)
      expect(selected.length).toBe(0)
      expect(selected).toEqual([])
    })
  })
  describe('getView', () => {
    it('fetches month', () => {
      const state = fromJS({
        events: {
          view: {
            now: 'month',
            date: new Date()
          }
        }
      })
      const selected = getView(state)
      expect(selected.now).toBe('month')
      //expect(selected.date.toDate !== 'undefined').toBe(true) // provide better validation
    })
  })
})
