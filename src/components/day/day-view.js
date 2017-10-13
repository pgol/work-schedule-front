import './day.css'
import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../../ducks/events.duck'
import { getEvents as getEventsSelector } from '../../selectors/events.selectors'
import DayForm from './day-form'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

class Day extends React.Component {
  render () {
    return (
      <div className="day-container">
        <div className="rbc-container">
          <DayForm addEvent={this.props.addEvent} handleSubmit={() => {}} />
          <BigCalendar
            //view={activeCalendarView} //provide syncing between redux stored view data
            events={this.props.events.map(mapMomentToDate)}
          />
        </div>
      </div>
    )
  }
}

const mapMomentToDate = (moment) => {
  return {
    start: moment.start.toDate(),
    end: moment.end.toDate(),
    title: moment.title
  }
}

const mapStateToProps = state => ({
  events: getEventsSelector(state)
})

const mapDispatchToProps = dispatch => ({
  addEvent: (event) => dispatch(addEvent(event))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)