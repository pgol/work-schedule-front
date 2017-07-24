import React from 'react'
import PropTypes from 'prop-types'
import {createDate} from '../../tools/date-tools'
import {isCenter, isActive} from '../../tools/view-tools'
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
      {events.map(event => {
        if (isActive(event, duration)) return (
          <div key={Math.random()} style={eventStyles(event, duration)} className="label">
            {isCenter(event, duration) ? event.name: ''}
          </div>
        )
      })}
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