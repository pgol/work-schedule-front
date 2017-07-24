/**
 * Indicates if event is happening during given hour
 */
export function isActive(event, time) {
  return event.start <= time.hour && event.end > time.hour
}
/**
 * Calculates if hour is in center of hour of event
 * @param event - event which has start and end
 * @param time - span throughout that event
 * @returns {boolean} - indicates if hour is in center time of event
 * @TODO: Add half of an hour support
 */
export function isCenter(event, time) {
  const eventCenter = Math.floor(event.start + ((event.end - event.start) / 2))
  const hourCenter = !time.minute ? time.hour : false
  return eventCenter === hourCenter
}