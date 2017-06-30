import {createHours} from '../tools/tools'

export const getHours = state => {
  let hours = state.get('hours').get('hours').toJS()
  console.log(hours)
  return createHours(hours.start, hours.end, hours.step)
}

export const getInitialHours = state => {
  return state.get('hours').get('initialHours')
}