import React from 'react'

import App from './App'
import Test from '../components/Test'
import * as assets from '../../assets'

const { enzyme: { mount }, chai: { expect }} = global

describe('<App />', function() {
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

// TODO: move asset test to __tests__
describe('Assets - file-loader', function() {
  it('should export-default-from and import as namespace', () => {
    // check export-default-from
    expect(assets.__esModule).to.be.equal(true) // eslint-disable-line import/namespace
    // check import - import-namespace combined with export-default-from
    expect(assets).to.contain.keys('viewar_device_assembly')
    // check path prefix
    expect(assets.viewar_device_assembly).to.contain('/assets/viewar_device_assembly.png')
  })
})
