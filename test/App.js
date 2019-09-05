import React, { Component, Fragment } from 'react'

import Test from 'components/Test'
// :global app styles
import styles from 'App.scss' // eslint-disable-line no-unused-vars

require('../src/utils/remoteConsole').remoteConsoleInjector()
// usage after release:
// import {remoteConsoleInjector} from '@viewar/webpack'
// TODO: move into multi-entry-point of webpack (`polyfills.js`)


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
