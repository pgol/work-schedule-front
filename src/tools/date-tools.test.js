import {createHours, addStep, createDate, formatTime} from './date-tools'

describe('createHours', () => {
  it('generates hour with 30 minute step', () => {
    const start = {
      hour: 12,
      minute: 0
    }
    const end = {
      hour: 13,
      minute: 0
    }
    const step = 30
    const ret = createHours(start, end, step)
    expect(ret[1]).toEqual({
      hour: 12,
      minute: 30
    })
    expect(ret[3]).toBeUndefined()
  })
  it('generates hours with more than one hour span', () => {
    const start = {
      hour: 12,
      minute: 0
    }
    const end = {
      hour: 15,
      minute: 0
    }
    const step = 70
    const ret = createHours(start, end, step)
    expect(ret[1]).toEqual({
      hour: 13,
      minute: 10
    })
    expect(ret.length).toBe(3)
  })
  it('generates multiple steps in one hour', () => {
    const start = {
      hour: 12,
      minute: 0
    }
    const end = {
      hour: 13,
      minute: 0
    }
    const step = 20
    const ret = createHours(start, end, step)
    expect(ret[2]).toEqual({
      hour: 12,
      minute: 40
    })
    expect(ret.length).toEqual(3)
  })
})

describe('addStep', () => {
  it('0 minutes, 30 step', () => {
    const initialTime = {
      hour: 12,
      minute: 0
    }
    const step = 30;
    const ret = addStep(initialTime, step)
    expect(ret).toEqual({
      hour: 12,
      minute: 30
    })
  })
  it('0 minutes, 60 step', () => {
    const initialTime = {
      hour: 12,
      minute: 0
    }
    const step = 60
    const ret = addStep(initialTime, step)
    expect(ret).toEqual({
      hour: 13,
      minute: 0
    })
  })
  it('30 minutes, step 40', () => {
    const initialTime = {
      hour: 12,
      minute: 32
    }
    const step = 48
    const ret = addStep(initialTime, step)
    expect(ret).toEqual({
      hour: 13,
      minute: 20
    })
  })
})

describe('formatTime', () => {
  it('time less than 10', () => {
    const time = 9
    const ret = formatTime(time)
    expect(ret).toEqual('09')
  })
  it('time equal 10', () => {
    const time = 10
    const ret = formatTime(time)
    expect(ret).toEqual(10)
  })
  it('time equals 30', () => {
    const time = 30
    const ret = formatTime(time)
    expect(ret).toEqual(30)
  })
})

describe('createDate', () => {
  it('concats data', () => {
    const hour = 10
    const minute = 30
    const ret = createDate(hour, minute)
    expect(ret).toEqual('10:30')
  })
  it('concats with < 10', () => {
    const hour = 3
    const minute = 5
    const ret = createDate(hour, minute)
    expect(ret).toEqual('03:05')
  })
})