import React, { Component } from 'react';
import { shallow, render } from 'enzyme';
import { EventAddForm } from './event-add-form';
import moment from 'moment';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Components::EventAddForm', () => {
  it('component renders without crashing', () => {
    const props = {
      event: {
        name: 'name'
      }
    };
    const component = shallow(<EventAddForm {...props} />);
  });

  it('component renders properly with props', () => {
    const props = {
      event: {
        name: 'name'
      }
    };
    const component = render(<EventAddForm {...props} />);
  });
});
