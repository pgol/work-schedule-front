import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form/immutable'
import { Input, Button } from 'antd'
import DatePickerMonth from './date-picker/date-picker-month'
import DatePickerDay from './date-picker/date-picker-day'
import moment from 'moment'

import './event.css'

class EventAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: moment('12:05:00', 'HH:mm:ss'),
      end: moment('15:06:00', 'HH:mm:ss'),
      title: ''
    }
  }

  handleStartChange = (start) => {
    this.setState({start})
  }
  handleEndChange = (end) => {
    this.setState({end})
  }

  handleChange = (event) => {
    this.setState({title: event.target.value})
  }

  /**
   * Maps type of view in calendar to look of form
   * @param {String} view - current view of React Big calendar component
   */
  mapViewToForm = (view, handleStartChange, handleEndChange) => {
    if (view === 'day') {
      return (
        <DatePickerDay
          //get date basing on this.props.view.date and change only hours/minutes/seconds
          handleStartChange={handleStartChange}
          handleEndChange={handleEndChange}
        />
      )
    }
    return (
      <DatePickerMonth 
        handleStartChange={handleStartChange}
        handleEndChange={handleEndChange}
      />
    )
  }

  render () {
    return (
        <div className="add-event-form" style={{}}>
          {this.mapViewToForm(this.props.view.now, this.handleStartChange, this.handleEndChange)}
          <Input
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Type name of event"
          />
          <div className="submit">
            <Button onClick={() => this.props.addEvent({...this.state})}>Add event</Button>
          </div>
        </div>
    )
  }
}

export default EventAddForm;
