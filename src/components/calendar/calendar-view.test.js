import React, { Component } from 'react'
import { shallow } from 'enzyme'
import { Calendar } from './calendar-view'
import moment from 'moment'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });

describe('Components::day-view', () => {
  it('component renders without crashing', () => {
    const calendar = shallow(<Calendar  events={[{start: moment(), end: moment(), title: 'title'}]}/>)
  })
})
