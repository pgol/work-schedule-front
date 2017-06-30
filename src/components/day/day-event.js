import React from 'react'
import { isCenter, createDate } from '../../tools/tools'

const isLabeled = (event, hour) => {
  return isCenter(event, hour) ? event.name : ''
}

const isActive = (event, hour) => {
  return event.start <= hour.hour && event.end > hour.hour ? event.color : 'transparent'
}

const eventStyles = (event, hour) => ({
  width: '100%',
  backgroundColor: isActive(event, hour)
})

/**
 * @param hours - time data about event
 * @param hours.start - hour of event starting
 * @param hours.stop - hour of event end
 * @param events - data about event
 * @param events.start - hour of event starting
 * @param events.stop - hour of event end
 * @param events.name - description from user of event
 * @param setLabel - event caused onClick for event
 */
const Event = ({hours, events, setLabel}) => {
  return (
    <div style={{width: '100%'}} onClick={setLabel}>
      {hours.map(hour => (
        <div className="event-container">
          <span className="hour">
            {createDate(hour.hour, hour.minute)}
          </span>
          {events.map(event => (
            <div style={eventStyles(event, hour)} className="label">
              {isLabeled(event, hour)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Event