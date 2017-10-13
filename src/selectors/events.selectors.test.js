import { getEvents } from './events.selectors'
import { fromJS } from 'immutable'
import moment from 'moment'

describe('getEvents', () => {
  it('fetches state with one event', () => {
    const state = fromJS({
      events: [{ title: 'Event', start: moment(new Date()), end: moment(new Date()) }]
    })
  
    const selected = getEvents(state)
    expect(selected.length).toBe(1)
    expect(selected[0].title).toBe('Event')
    expect(selected[0].start.toDate()).toBeDefined()
    expect(selected[0].end.toDate()).toBeDefined()
  })
  it('fetches empty events object', () => {
    const state = fromJS({
      events: []
    })

    const selected = getEvents(state)
    expect(selected.length).toBe(0)
    expect(selected).toEqual([])
  })
})
