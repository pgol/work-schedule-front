export function createHours (start, stop, step) {
  let hours = []
  let date = start
  while (date.hour <= stop.hour) {
    hours.push(Object.assign({}, date))
    date = addStep(date, step)
  }

  return hours
}

function addStep(initialHours, step) {
  let hours = Object.assign({}, initialHours)
  if (hours.minute + step >= 60) {
    hours.minute = (hours.minute + step) % 60
    hours.hour++
  } else {
    hours.minute += step
  }
  return hours
}

export function createDate (hours, minutes) {
  return addDate(hours) + ':' + addDate(minutes)
}

function addDate (date) {
  return date < 10 ? `0${date}` : date
}

/**
 * Creates hour span from an event object
 * @param event - contains start and end of an event
 * @returns {Array} - valid full hour schedule of an event
 */
export function generateHourSpan (event) {
  return new Array(event.end - event.start)
    .fill(0)
    .map((e, i) => i + event.start)
}

/**
 * Calculates if hour is in center of duration of event
 * @param event - event which has start and end
 * @param hour - hour span during that event
 * @returns {boolean} - flag saying if hour is in center time of event
 */
export function isCenter (event, hour) {
  let eventCenter = Math.floor(event.start + ((event.end - event.start) / 2))
  let hourCenter = !hour.minute ? hour.hour : false
  return eventCenter === hourCenter
}

export const events = [
  {
    start: 6,
    end: 11,
    name: 'Dinner',
    person: 'SomeOne',
    color: '#efefef'
  },
  {
    start: 10,
    end: 16,
    name: 'Being awesome',
    person: 'SomeOne',
    color: 'rgb(120, 250, 240)'
  },
  {
    start: 15,
    end: 19,
    name: 'Being crazy',
    person: 'SomeOne',
    color: 'rgb(250, 120, 20)'
  }
]
