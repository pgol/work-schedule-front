import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import DatePicker from './date-picker';
import moment from 'moment';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Components::DatePicker', () => {
  it('component renders without crashing', () => {
    const component = shallow(<DatePicker />);
    expect(component.props().defaultValue.hours()).toEqual(moment().hours());
  });

  it('component renders properly with props', () => {
    const props = {
      handleStartChange: jest.fn(),
      handleEndChange: jest.fn()
    };
    const component = mount(<DatePicker {...props} />);

    expect(component.find('.ant-calendar-picker').length).toBe(2);
    expect(component.find('.date-picker-month').length).toBe(1);
  });
});
