export const getEvents = state => {
  return state.get('events').get('events').toJS()
}
