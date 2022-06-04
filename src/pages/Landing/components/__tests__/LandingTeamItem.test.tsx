import LandingTeamItem from '@pages/Landing/components/LandingTeamItem'
import { Typography } from '@mui/material'
import { shallow } from 'enzyme'
import React from 'react'

describe('<LandingTeamItem />', () => {
  const args = {
    img: 'www.jpg',
    title: 'jacob',
    subTitle: 'test'
  }

  it('should render', () => {
    const component = shallow(<LandingTeamItem {...args} />)
    expect(component).toMatchSnapshot()
  })

  it('should have landing team card with valid title text', () => {
    const component = shallow(<LandingTeamItem {...args} />)
    const section = component.find(Typography).at(0)

    expect(section.text()).toMatch('jacob')
  })

  it('should have landing team card with valid subTitle text', () => {
    const component = shallow(<LandingTeamItem {...args} />)
    const section = component.find(Typography).at(1)

    expect(section.text()).toMatch('test')
  })
})
