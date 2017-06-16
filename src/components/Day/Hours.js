import React from 'react'
import { createHours, createDate } from '../../tools/tools'

const Day = (
  {start = {hour: 8, minute: 0},
    stop = {hour: 16, minute: 0},
    step = 30}) => {
  return (
    <div className="hour-container">
      {createHours(start, stop, step).map(e => (
        <span className="hour">{createDate(e.hour, e.minute)}</span>
      ))}

    </div>
  )
}

export default Day