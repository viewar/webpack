import React, { Component, Fragment } from 'react'

import Test from 'components/Test'
import styles from 'App.scss' // eslint-disable-line no-unused-vars

// import {remoteConsoleInjector} from '@viewar/webpack/remoteConsole'
require('../remoteConsole').remoteConsoleInjector()


class App extends Component {
  render() {
    // test error reporting per remtoteConsole
    // const foo = bar

    return (
      <Fragment>
        <h1>@viewar/webpack up and running!</h1>
        <Test />
      </Fragment>
    )
  }
}

export default App
