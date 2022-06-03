import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

/* eslint-disable no-undef */
describe('<App />', () => {
  it('should render', () => {
    const loginComponent = shallow(<App />)
    expect(loginComponent).toMatchSnapshot()
  })
})
