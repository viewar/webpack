import React from 'react'

import App from './App'

const { enzyme: { mount }, chai: { expect }} = global

describe('Test', function() {
  it('renders without problems', function() {
    const wrapper = mount(<App />)
    expect(wrapper).to.have.descendants('#app_headline')
  })
})
