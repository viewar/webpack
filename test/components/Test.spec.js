import React from 'react'

import TestComponent from './Test'

const { enzyme: { shallow }, chai: { expect }} = global

describe('Test', function() {
  it('renders without problems', function() {
    const wrapper = shallow(<TestComponent foo="bar" />)
    expect(wrapper.find('#foo')).to.contain.text('bar')
  })
})
