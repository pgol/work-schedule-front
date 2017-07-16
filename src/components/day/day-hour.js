import React from 'react'
import PropTypes from 'prop-types'
import { isCenter, createDate } from '../../tools/tools'

/**
 * Indicates if hour is in center of an event
 */
const isLabeled = (event, hour) => {
  return isCenter(event, hour) ? event.name : ''
}

/**
 * Indicates if event is happening during given hour
 */
const isActive = (event, hour) => {
  return event.start <= hour.hour && event.end > hour.hour
}

const eventStyles = (event, hour) => ({
  width: '100%',
  backgroundColor: isActive(event, hour) ? event.color : 'transparent',
})

const Event = ({duration, events}) => {
  return (
    <div className="event-container">
      <span className="hour">
        {createDate(duration.hour, duration.minute)}
      </span>
      {events.map(event => (
        <div style={eventStyles(event, duration)} className="label">
          {isLabeled(event, duration)}
        </div>
      ))}
    </div>
  )
}

Event.propTypes = {
  duration: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number
  }),
  events: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
    name: PropTypes.string,
    person: PropTypes.string,
    color: PropTypes.string
  }))
}

export default Event