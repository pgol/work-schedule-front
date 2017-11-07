// @flow
import React from 'react'
import moment from 'moment'
import DatePickerMonth from './date-picker-month'

/**
  * Maps type of view in calendar to look of form
  * @param {Function} handleStartChange - handler choosing beginning date of event
  * @param {Function} handleEndChange - handles choosing end date of event
  * @param {Object} view - current view of React Big calendar component
*/
type Props = {
  handleStartChange: Function,
  handleEndChange: Function,
  view: Object,
}

const DatePicker = ({ handleStartChange, handleEndChange, view = {date: moment()}} : Props) => (
  <DatePickerMonth
    defaultValue={view.date}
    handleStartChange={handleStartChange}
    handleEndChange={handleEndChange}
  />
)

export default DatePicker
