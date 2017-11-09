// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form } from 'antd';
import {
  getEvent as getEventSelector,
  getView as getViewSelector
} from './../../selectors/events.selectors';
import {
  setStartEvent,
  setEndEvent,
  setNameEvent,
  addEvent
} from './../../ducks/events.duck';
import DatePicker from './date-picker/date-picker';
import './event.css';

const FormItem = Form.Item;

export class EventAddForm extends Component {
  handleStartChange = start => {
    this.props.setStartEvent(start);
  };
  handleEndChange = end => {
    this.props.setEndEvent(end);
  };

  handleTitleChange = event => {
    this.props.setNameEvent(event.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addEvent();
  };

  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          <DatePicker
            view={this.props.view}
            handleStartChange={this.handleStartChange}
            handleEndChange={this.handleEndChange}
          />
        </FormItem>
        <FormItem>
          <Input
            value={this.props.event.name}
            onChange={this.handleTitleChange}
            placeholder="Type name of event"
          />
        </FormItem>
        <FormItem>
          <Button htmlType="submit">Add event</Button>
        </FormItem>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addEvent: () => dispatch(addEvent()),
  setStartEvent: start => dispatch(setStartEvent(start)),
  setEndEvent: end => dispatch(setEndEvent(end)),
  setNameEvent: name => dispatch(setNameEvent(name))
});

const mapStateToProps = state => ({
  event: getEventSelector(state),
  view: getViewSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventAddForm);
