import React from 'react'
import DatePickerMonth from './date-picker-month'

/**
  * Maps type of view in calendar to look of form
  * @param {Function} handleStartChange - hanldes choosing beggining date of event
  * @param {Function} handleEndChange - handles choosing end date of event
  * @param {String} view - current view of React Big calendar component
*/
const DatePicker = ({ handleStartChange, handleEndChange, view}) => (
  <DatePickerMonth
    defaultValue={view.date}
    handleStartChange={handleStartChange}
    handleEndChange={handleEndChange}
  />
)

export default DatePicker