/**
 * Fetches current events added to calendar
 * @param {Object} state current state of app
 */
export const getEvents = state => {
  return state.get('events').get('schedule').toJS()
}

/**
 * Fetches current view of main calendar
 * @param {Object} state current state of app
 */
export const getView = state => {
  return state.get('events').get('view').toJS()
}