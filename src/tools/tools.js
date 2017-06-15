/**
 * Creates hour span from an event object
 * @param event - contains start and end of an event
 * @returns {Array} - valid full hour schedule of an event
 */
export function generateHourSpan (event) {
  return new Array(event.end - event.start).fill(0).map( (e, i) => i + event.start)
}

/**
 * Calculates if hour is in center of duration of event
 * @param event - event which has start and end
 * @param hour - hour span during that event
 * @returns {boolean} - flag saying if hour is in center time of event
 */
export function isCenter(event, hour) {
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
