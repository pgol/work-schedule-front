import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form/immutable'
import { DatePicker, TimePicker, Input } from 'antd'
import moment from 'moment'

class DayForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: moment('12:05:00', 'HH:mm:ss'),
      end: moment('15:06:00', 'HH:mm:ss'),
      title: 'testTitle'
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

  render () {
    return (
        <div className="add-event-form" style={{padding: 20}}>
          <div className="date" style={{width: '60%', display: 'inline-block'}}>
            <DatePicker 
              placeholder="Start"
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} 
              format="YYYY-MM-DD HH:mm:ss" 
              onChange={this.handleStartChange}
            />
            <DatePicker
              placeholder="End"
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} 
              format="YYYY-MM-DD HH:mm:ss" 
              onChange={this.handleEndChange}
            />
          </div>
          <div className="event-title" style={{width: '30%', display: 'inline-block'}}>
            <Input value={this.state.title} onChange={this.handleChange}/>
          </div>
          <div className="submit">
            <button onClick={() => this.props.addEvent({...this.state})}>Add event</button>
          </div>
        </div>
    )
  }
}

export default DayForm;
