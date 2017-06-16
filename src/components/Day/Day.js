import React from 'react'
import { events } from '../../tools/tools'
import Event from '../Event/Event'
import Hours from './Hours'

/**
 * @param props.detail[=1]
 */
class Day extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="event-container" onClick={this.setLabel}>
        <Hours />
        {events.map(event => (
            <Event event={event}/>
        ))}
      </div>
    )
  }
}

export default Day