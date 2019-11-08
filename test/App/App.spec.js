import React from 'react'

import App from './App'
import Test from '../components/Test'
import * as assets from '../assets'

const { enzyme: { mount }, chai: { expect }} = global

describe('[<App />]', function() {
  const wrapper = mount(<App />)

  it('renders without errors', function() {
    expect(wrapper).to.have.descendants('#app_headline')
  })

  it('renders with child component <Test />', function() {
    expect(wrapper).to.contain(<Test foo="bar" />)
    expect(wrapper).to.not.contain(<Test foo="foo" />)

    expect(wrapper).to.have.descendants('#foo')
  })
})

describe('ASSETS - file-loader', function() {
  // check export-default-from
  expect(assets.__esModule).to.be.equal(true) // eslint-disable-line import/namespace
  // check import - improt-namespace combined with export-default-from
  expect(assets).to.contain.keys('viewar_device_assembly')
  // check path prefix
  expect(assets.viewar_device_assembly).to.contain('/assets/viewar_device_assembly.png')
})
