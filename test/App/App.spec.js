import React from 'react'

import App from './App'
import Test from '../components/Test'

const { enzyme: { mount }, chai: { expect }} = global

describe('<App />', function() {
  const wrapper = mount(<App />)

  it('renders without errors', function() {
    expect(wrapper).to.have.descendants('#app_headline')
  })

  it('renders with child component <Test foo="foo" />', function() {
    expect(wrapper).to.contain(<Test foo="bar" />)
    expect(wrapper).to.not.contain(<Test foo="foo" />)

    expect(wrapper).to.have.descendants('#foo')
  })
})
