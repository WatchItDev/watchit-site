import LandingFloating from '@pages/Landing/components/LandingFloating'
import { shallow } from 'enzyme'
import React from 'react'

describe('<LandingFloating />', () => {
  it('should render', () => {
    const component = shallow(<LandingFloating />)
    expect(component).toMatchSnapshot()
  })
})
