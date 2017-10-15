import React from 'react'
import { TimePicker } from 'antd'

const dayFormat = 'HH:mm:ss'

const DatePickerDay = ({ handleStartChange, handleEndChange }) => (
  <div className="date-picker-month" style={{}}>
    <TimePicker
      style={{margin: 5}}
      format={dayFormat}
      onChange={handleStartChange}
    />
    <TimePicker
      style={{margin: 5}}
      format={dayFormat}
      onChange={handleEndChange}
    />
  </div>
)

export default DatePickerDay