import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { Layout } from 'antd'
import { addEvent, setView, setNavigation } from '../../ducks/events.duck'
import { getView as getEventSelector,
         getEvents as getEventsSelector,
        } from '../../selectors/events.selectors'
import EventAddForm from '../event/event-add-form'
import UsersView from '../users/users-view'

import './calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

export class Calendar extends React.Component {
  render () {
    const { Sider, Content } = Layout;
    return (
      <Layout>
        <Sider>
          <UsersView 

          />
          <EventAddForm 
            view={this.props.view} 
            addEvent={this.props.addEvent} 
          />
        </Sider>
        <Content>
          <div className="calendar-container">
            <div className="rbc-container">
              <BigCalendar
                onNavigate={(navigation) => this.props.setNavigation(navigation)}
                onView={(view) => this.props.setView(view)}
                events={this.props.events.map(mapMomentToDate)}
              />
            </div>
        </div>
        </Content>
    </Layout>
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
  events: getEventsSelector(state),
  view: getEventSelector(state)
})

const mapDispatchToProps = dispatch => ({
  addEvent: (event) => dispatch(addEvent(event)),
  setView: (view) => dispatch(setView(view)),
  setNavigation: (navigation) => dispatch(setNavigation(navigation))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)