import LandingApp from '@pages/Landing/components/LandingApp'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { Typography } from '@mui/material'
import i18n from '@src/i18n'

describe('<LandingApp />', () => {
  it('should render', () => {
    const component = shallow(<LandingApp />)
    expect(component).toMatchSnapshot()
  })

  it('should have landing app valid info title', () => {
    const component = mount(<LandingApp />)
    const section = component.find(Typography).at(0)

    expect(section.text()).toMatch('Enjoy the best of independent cinema')
  })

  it('should have landing app info subtitle with valid translation text', () => {
    const translate = i18n.t('LANDING_APP_SUBTITLE')
    const component = mount(<LandingApp />)
    const section = component.find(Typography).at(1)

    expect(section.text()).toMatch(translate)
  })
})
