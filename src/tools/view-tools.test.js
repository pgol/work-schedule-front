import {isActive, isLabeled, isCenter} from './view-tools'

describe('isActive', () => {
  it('active event for given hour', () => {
    const time = {
      hour: 12,
      minute: 30
    }
    const event = {
      start: 11,
      end: 20
    }
    const ret = isActive(event, time)
    expect(ret).toBeTruthy()
  })
  it('not active event for given hour', () => {
    const time = {
      hour: 12,
      minute: 30
    }
    const event = {
      start: 15,
      end: 20
    }
    const ret = isActive(event, time)
    expect(ret).toBeFalsy()
  })
})
describe('isCenter', () => {
  it('is in the center', () => {
    const time = {
      hour: 15,
      minute: 0
    }
    const event = {
      start: 10,
      end: 20
    }
    const ret = isCenter(event, time)
    expect(ret).toBeTruthy()
  })
  it('is not in the center', () => {
    const time = {
      hour: 15,
      minute: 0
    }
    const event = {
      start: 14,
      end: 18
    }
    const ret = isCenter(event, time)
    expect(ret).toBeFalsy()
  })
  it('is in center by hour but has some minutes', () => {
    const time = {
      hour: 16,
      minute: 30
    }
    const event = {
      start: 14,
      end: 18
    }
    const ret = isCenter(event, time)
    expect(ret).toBeFalsy()
  })
})
