/* eslint-disable node/no-unpublished-import */
import React from 'react'
// import TestUtils from 'react-dom/test-utils'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { expect } from 'chai'

import Test from 'components/Test'
// import App from 'App'

// TODO: move configuration to "before" config setup
configure({ adapter: new Adapter() })

describe('Test', function() {
  it('renders without problems', function() {
    shallow(<Test />)
  })
})
