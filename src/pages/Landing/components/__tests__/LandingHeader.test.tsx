import LandingHeader from '@pages/Landing/components/LandingHeader'
import { shallow } from 'enzyme'
import React from 'react'

describe('<LandingHeader />', () => {
  it('should render', () => {
    const component = shallow(<LandingHeader />)
    expect(component).toMatchSnapshot()
  })
})
