import './day.css'
import React from 'react'
import { connect } from 'react-redux'
import Event from './day-hour'
import { defineHours } from '../../ducks/day.duck'
import { getHours as getHoursSelector, getEvents as getEventsSelector } from '../../selectors/day.selectors'
import {createHours} from '../../tools/date-tools'

class Day extends React.Component {
  render () {
    return (
      <div className="day-container">
        <div style={{width: '100%'}}>
          {this.props.hours.map(duration => (
              //@TODO: create ID's or convert minute/hour into milisecond timestamp for key value
              <Event key={Math.random()} events={this.props.events} duration={duration} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hours: getHoursSelector(state, createHours),
  events: getEventsSelector(state)
})

const mapDispatchToProps = dispatch => ({
  onDefineHours: (hours) => dispatch(defineHours(hours))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)