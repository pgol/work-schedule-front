export const getHours = (state, createHours) => {
  const hours = state.get('day').get('hours').toJS()
  return createHours(hours.start, hours.end, hours.step)
}

export const getEvents = state => {
  return state.get('day').get('events').toJS()
}
