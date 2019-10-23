/* eslint-disable node/no-unpublished-import */
import React from 'react'
// import TestUtils from 'react-dom/test-utils'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, configure } from 'enzyme'

import TestComponent from './Test'

const foo = () => {
  return 'foo'
}

// TODO: move configuration to "before" config setup
configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

describe('Test', function() {
  it('renders without problems', function() {
    const wrapper = shallow(<TestComponent />)
    chai.expect(wrapper).to.have.id('test_wrapper')
    chai.expect(wrapper).to.have.descendants('#foo')
  })
})
