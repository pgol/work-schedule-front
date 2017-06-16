export function createHours (start, stop, step) {
  let hours = []
  let date = start
  while (date.hour <= stop.hour) {
    hours.push(Object.assign({}, date))
    date = addStep(date, step)
  }

  //get start hour in format like 16:00
  // increment by custom function creating from 16:00 16:30 etc
  //repeat until stop is reached
  return hours
}

function addStep(date, step) {
  if (date.minute + step >= 60) {
    date.minute = (date.minute + step) % 60
    date.hour++
  } else {
    date.minute += step
  }
  console.log(date)
  return date
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
  return Math.floor(event.start + ((event.end - event.start) / 2)) === hour
}

export const events = [
  {
    start: 6,
    end: 12,
    name: 'Dinner',
    person: 'SomeOne'
  },
  {
    start: 12,
    end: 17,
    name: 'Being awesome',
    person: 'SomeOne'
  }
]
