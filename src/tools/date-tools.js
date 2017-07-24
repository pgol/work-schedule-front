/**
 * Generates hour/minute schedule data
 */
export function createHours(start, stop, step) {
  let hours = []
  let time = Object.assign({}, start)
  while (time.hour < stop.hour || (time.hour === stop.hour && time.minute < stop.minute)) {
    hours.push(time)
    time = addStep(time, step)
  }
  return hours
}

/**
 * Produces a single step on an event schedule
 */
export function addStep(time, step) {
  if (time.minute + step >= 60) {
    return {
      hour: time.hour + 1,
      minute: (time.minute + step) % 60
    }
  } else {
    return {
      hour: time.hour,
      minute: time.minute + step
    }
  }
}

/**
 * Generates date format as HH:MM
 */
//Use dependency injection?
export function createDate(hours, minutes) {
  return formatTime(hours) + ':' + formatTime(minutes)
}

/**
 * Generates single hour/minute 2-digit display
 */
export function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

