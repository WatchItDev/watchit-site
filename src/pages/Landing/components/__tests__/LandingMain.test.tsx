import LandingMain from '@pages/Landing/components/LandingMain'
import { Typography } from '@mui/material'
import { mount, shallow } from 'enzyme'
import i18n from '@src/i18n'
import React from 'react'

describe('<LandingMain />', () => {
  it('should render', () => {
    const component = shallow(<LandingMain />)
    expect(component).toMatchSnapshot()
  })

  it('should have landing main valid info title', () => {
    const component = mount(<LandingMain />)
    const section = component.find(Typography).at(0)

    expect(section.text()).toMatch('Sell, Buy and Watch!')
  })

  it('should have landing main info subtitle with valid translation text', () => {
    const translate = i18n.t('LANDING_MAIN_SUBTITLE')
    const component = mount(<LandingMain />)
    const section = component.find(Typography).at(1)

    expect(section.text()).toMatch(translate)
  })
})
