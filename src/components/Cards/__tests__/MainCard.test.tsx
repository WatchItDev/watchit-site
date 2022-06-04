import { MainCard } from '@components/Cards'
import { shallow } from 'enzyme'
import React from 'react'

describe('<MainCard />', () => {
  it('should render', () => {
    const component = shallow(<MainCard />)
    expect(component).toMatchSnapshot()
  })
})
