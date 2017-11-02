import React, { Component } from 'react'
import { shallow, render } from 'enzyme'
import { Calendar } from './calendar-view'
import moment from 'moment'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('Components::day-view', () => {
  it('component renders without crashing', () => {
    const props = {
      events: [{ start: moment(), end: moment(), name: 'name' }]
    }
    const component = shallow(<Calendar {...props} />)
  })

  it('renders properly container', () => {
    const start = moment()
    const end = moment().add(4, 'hours')
    const props = {
      events: [{ start: moment(), end: moment(), name: 'name' }],
      setView: jest.fn(),
      setNavigation: jest.fn(),
      setEvent: jest.fn()
    }
    const component = render(
      <Calendar {...props} />
    )

    expect(component.find('.calendar-container').length).toBe(1)
  })
})
