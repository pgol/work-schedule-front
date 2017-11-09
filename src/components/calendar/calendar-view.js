// @flow
import React from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import { Layout } from 'antd';
import { setView, setNavigation, setEvent } from '../../ducks/events.duck';
import { getEvents as getEventsSelector } from '../../selectors/events.selectors';

import './calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

type Props = {
  setView: Function,
  setNavigation: Function,
  setEvent: Function,
  events: Object
};

export class Calendar extends React.Component<Props> {
  render() {
    const { setView, setNavigation, setEvent, events } = this.props;
    const { Content } = Layout;
    return (
      <Content>
        <div className="calendar-container">
          <div className="rbc-container">
            <DragAndDropCalendar
              selectable
              onEventDrop={setEvent}
              onNavigate={setNavigation}
              onView={setView}
              events={events.map(mapMomentToDate)}
            />
          </div>
        </div>
      </Content>
    );
  }
}

const mapMomentToDate = event => ({
  ...event,
  start: event.start.toDate(),
  end: event.end.toDate()
});

const mapStateToProps = state => ({
  events: getEventsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setView: view => dispatch(setView(view)),
  setNavigation: navigation => dispatch(setNavigation(navigation)),
  setEvent: event => dispatch(setEvent(event))
});

Calendar = DragDropContext(HTML5Backend)(Calendar);

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
