import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'

const monthFormat = 'YYYY-MM-DD HH:mm:ss'

const DatePickerMonth = ({handleStartChange, handleEndChange}) => (
  <div className="date-picker-month" style={{}}>
    <DatePicker
      style={{margin: 5}}
      format={monthFormat}
      showTime={{ defaultValue: moment() }} 
      onChange={handleStartChange}
    />
    <DatePicker
      style={{margin: 5}}
      showTime={{ defaultValue: moment() }} 
      format={monthFormat}
      onChange={handleEndChange}
    />
  </div>
)

export default DatePickerMonth