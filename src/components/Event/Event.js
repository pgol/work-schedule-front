import React from 'react'
import { generateHourSpan, isCenter } from '../../tools/tools'
import './Event.css'

/**
 * @param props.event - data about event
 * @param props.event.start - hour of event starting
 * @param props.event.stop - hour of event end
 * @param props.event.name - user description of event
 */
class Event extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      event: props.event,
      timespan: generateHourSpan(props.event)
    }
  }
  setLabel = () => {
    this.setState({
      event: {
        ...this.state.event,
        name: prompt('wat value ya wnat?')
      }
    })
  }
  render () {
    const timespan = this.state.timespan
    const event = this.state.event
    return (
      <div className="event-container" onClick={this.setLabel}>
        {timespan.map( e => <div className="hour-container">
          <div className="label">
            <span>
              { isCenter(event, e) ? event.name : ''}
            </span>
          </div>
        </div>)}
      </div>
    )
  }
}

export default Event