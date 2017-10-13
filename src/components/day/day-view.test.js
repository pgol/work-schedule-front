import React from 'react'
import { shallow } from 'enzyme'
import { Day } from './day-view'

describe('Components::day-view', () => {
  xit('component renders without crashing', () => {
    const day = shallow(<Day />)
  })
})


/*
import React from 'react'
import chai, { expect } from 'chai'
import { mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import FeedFormatImage from './FeedFormatImage'

chai.use(chaiEnzyme)
chai.use(sinonChai)

describe('Components::FeedFormatImage', () => {
  it('should call onChange handler when clicked', () => {
    const onClickSpy = sinon.spy()
    let wrapper = mount(<FeedFormatImage onClick={onClickSpy} />)
    wrapper.find('div').first().simulate('click')
    expect(onClickSpy.called).to.be.true //eslint-disable-line
  })
})
*/