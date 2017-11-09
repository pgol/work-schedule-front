/**
 * Fetches current events added to calendar
 * @param {Object} state current state of app
 */
export const getEvents = state => {
  return state
    .get('events')
    .get('schedule')
    .toJS();
};

/**
 * Fetches current view of main calendar
 * @param {Object} state current state of app
 */
export const getView = state => {
  return state
    .get('events')
    .get('view')
    .toJS();
};

/**
 * Fetches event for add-event form
 * @param {Object} state current state of app
 */
export const getEvent = state => {
  return state
    .get('events')
    .get('event')
    .toJS();
};
