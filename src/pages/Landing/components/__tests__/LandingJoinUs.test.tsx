import LandingJoinUs from '@pages/Landing/components/LandingJoinUs'
import { Typography } from '@mui/material'
import { mount, shallow } from 'enzyme'
import i18n from '@src/i18n'
import React from 'react'

describe('<LandingJoinUs />', () => {
  it('should render', () => {
    const component = shallow(<LandingJoinUs />)
    expect(component).toMatchSnapshot()
  })

  it('should have landing join us valid title text', () => {
    const component = mount(<LandingJoinUs />)
    const section = component.find(Typography).at(0)

    expect(section.text()).toMatch('Make your new great investment! Invest in talent!')
  })

  it('should have landing join us subtitle with valid translation text', () => {
    const translate = i18n.t('LANDING_JOIN_US_1_SUBTITLE')
    const component = mount(<LandingJoinUs />)
    const section = component.find(Typography).at(1)

    expect(section.text()).toMatch(translate)
  })

  it('should have landing join us valid text', () => {
    const translate = i18n.t('LANDING_JOIN_US')
    const component = mount(<LandingJoinUs />)
    const section = component.find(Typography).at(2)

    expect(section.text()).toMatch(translate)
  })

  it('should have landing join us info 2 valid title text', () => {
    const component = mount(<LandingJoinUs />)
    const section = component.find(Typography).at(3)

    expect(section.text()).toMatch('Be part of our growing community')
  })

  it('should have landing join us info 2 subtitle with valid translation text', () => {
    const translate = i18n.t('LANDING_JOIN_US_2_SUBTITLE')
    const component = mount(<LandingJoinUs />)
    const section = component.find(Typography).at(4)

    expect(section.text()).toMatch(translate)
  })
})
