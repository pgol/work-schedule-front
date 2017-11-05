import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePickerMonth from './date-picker-month'

/**
  * Maps type of view in calendar to look of form
  * @param {Function} handleStartChange - hanldes choosing beggining date of event
  * @param {Function} handleEndChange - handles choosing end date of event
  * @param {String} view - current view of React Big calendar component
*/
const DatePicker = ({ handleStartChange, handleEndChange, view = {date: moment()}}) => (
  <DatePickerMonth
    defaultValue={view.date}
    handleStartChange={handleStartChange}
    handleEndChange={handleEndChange}
  />
)

DatePicker.PropTypes = {
  handleStartChange: PropTypes.func,
  handleEndChange: PropTypes.func,
  view: PropTypes.object
}

export default DatePicker