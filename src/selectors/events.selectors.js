/**
 * Fetches current events added to calendar
 * @param {Object} state current state of app
 */
export const getEvents = state => {
  return state.get('events').toJS()
}