import './day.css'
import React from 'react'
import { connect } from 'react-redux'
import Event from './day-hour'
import { events } from '../../tools/tools'
import { defineHours } from '../../ducks/day.duck'
import { getHours as getHoursSelector } from '../../selectors/day.selectors'

class Day extends React.Component {
  render () {
    return (
      <div className="day-container">
        <div style={{width: '100%'}}>
          {this.props.hours.map(duration => (
              <Event events={events} duration={duration} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hours: getHoursSelector(state)
})

const mapDispatchToProps = dispatch => ({
  onDefineHours: (hours) => dispatch(defineHours(hours))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)