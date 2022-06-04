import LandingTeam from '@pages/Landing/components/LandingTeam'
import { Typography } from '@mui/material'
import { mount, shallow } from 'enzyme'
import i18n from '@src/i18n'
import React from 'react'

describe('<LandingTeam />', () => {
  it('should render', () => {
    const component = shallow(<LandingTeam />)
    expect(component).toMatchSnapshot()
  })

  it('should have landing team valid info title', () => {
    const component = mount(<LandingTeam />)
    const section = component.find(Typography).at(0)

    expect(section.text()).toMatch('Meet The Team')
  })

  it('should have landing team info subtitle with valid translation text', () => {
    const translate = i18n.t('LANDING_TEAM_SUBTITLE')
    const component = mount(<LandingTeam />)
    const section = component.find(Typography).at(1)

    expect(section.text()).toMatch(translate)
  })
})
