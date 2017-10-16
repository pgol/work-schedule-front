import React from 'react'
import { TimePicker } from 'antd'

const dayFormat = 'HH:mm:ss'

const DatePickerDay = ({ handleStartChange, handleEndChange }) => (
  <div className="date-picker-month" style={{}}>
    <TimePicker
      format={dayFormat}
      onChange={handleStartChange}
    />
    <TimePicker
      format={dayFormat}
      onChange={handleEndChange}
    />
  </div>
)

export default DatePickerDay