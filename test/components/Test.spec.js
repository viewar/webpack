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
// import App from 'App'

describe('Test', function() {
  it('renders without problems', function() {
    const wrapper = shallow(<TestComponent />)
    chai.expect(wrapper).to.have.descendants('#foo')

    // const insertedComponent = TestUtils.renderIntoDocument(<Test />)
    // expect(insertedComponent).to.exist()

    // chai.expect('foo').to.equal('foo')
  })
})
