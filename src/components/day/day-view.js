import React from 'react'
import { connect } from 'react-redux'
import './day.css'
import { events, createDate } from '../../tools/tools'

import { defineHours } from '../../ducks/day.duck'
import { getHours as getHoursSelector } from '../../selectors/day.selectors'
import Event from './day-event'

class Day extends React.Component {
  componentDidMount () {
  }
  /*componentDidUpdate() {
    this.props.onDefineHours()
  }*/

  render () {
    return (
      <div className="day-container" onClick={() => {}}>
        <div style={{width: '100%'}}>
          {this.props.hours.map(hour => (
              <Event events={events} hour={hour} />
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