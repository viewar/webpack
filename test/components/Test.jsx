import PropTypes from 'prop-types'
import React from 'react'

const Test = ({ foo }) => {
  return (
    <div id="test_wrapper">
      <div id="foo">{foo}</div>
    </div>
  )
}

Test.propTypes = {
  foo: PropTypes.string.isRequired,
}

export default Test
