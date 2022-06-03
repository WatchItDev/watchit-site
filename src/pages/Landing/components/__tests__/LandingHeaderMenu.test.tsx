import React from 'react'
import { shallow } from 'enzyme'
import Menu from '@pages/Landing/components/LandingHeaderMenu'

/* eslint-disable no-undef */

describe('<Menu>', () => {
  it('should render', () => {
    const component = shallow(<Menu handleToggleMenu={() => {}} isMenuOpen={false} />)
    expect(component).toMatchSnapshot()
  })
})
