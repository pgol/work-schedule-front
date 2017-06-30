import React from 'react'
import { connect } from 'react-redux'
import './day.css'
import { events } from '../../tools/tools'

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
        <Event
          hours={this.props.hours}
          events={events}
          setLabel={() => {}}
        />
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