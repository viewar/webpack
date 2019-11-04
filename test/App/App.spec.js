/* eslint-disable node/no-unpublished-import */
import React from 'react'

import App from './App'

const { chai: { expect }, enzyme: { mount }} = global

describe('<App />', function() {
  it('renders without problems', function() {
    const wrapper = mount(<App />)
    expect(wrapper).to.have.descendants('#app_headline')
  })
})
