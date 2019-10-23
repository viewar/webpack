/* eslint-disable node/no-unpublished-import */
import React from 'react'
import chai from 'chai'
import { mount } from 'enzyme'

import App from './App'

describe('<App />', function() {
  it('renders without problems', function() {
    const wrapper = mount(<App />)
    chai.expect(wrapper).to.have.descendants('#app_headline')
  })
})
