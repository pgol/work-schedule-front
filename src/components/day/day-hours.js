import React from 'react'
import { createDate } from '../../tools/tools'

const Day = ({hours}) => {
  return (
    <div className="hour-container">
      {hours.map(e => (
        <span className="hour">{createDate(e.hour, e.minute)}</span>
      ))}

    </div>
  )
}

export default Day