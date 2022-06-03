import LandingCoin from '@pages/Landing/components/LandingCoin'
import { Typography } from '@mui/material'
import { mount, shallow } from 'enzyme'
import i18n from '@src/i18n'
import React from 'react'

describe('<LandingCoin />', () => {
  it('should render', () => {
    const component = shallow(<LandingCoin />)
    expect(component).toMatchSnapshot()
  })

  it('should have landing coin valid landing info title', () => {
    const component = mount(<LandingCoin />)
    const section = component.find(Typography).at(0)

    expect(section.text()).toMatch('Watchit Video Coin')
  })

  it('should have landing coin subtitle with valid translation text', () => {
    const translate = i18n.t('LANDING_COIN_SUBTITLE')
    const component = mount(<LandingCoin />)
    const section = component.find(Typography).at(1)

    expect(section.text()).toMatch(translate)
  })
})
