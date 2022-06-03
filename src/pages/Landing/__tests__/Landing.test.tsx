import React from 'react'
import { shallow } from 'enzyme'
import Landing from '@pages/Landing'

/* eslint-disable no-undef */
describe('<Landing />', () => {
  it('should render', () => {
    const landingComponent = shallow(<Landing />)
    expect(landingComponent).toMatchSnapshot()
  })
})
