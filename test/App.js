import React, { PureComponent } from 'react'

import styles from 'App.scss' // eslint-disable-line no-unused-vars
import Test from 'components/Test.jsx'

require('../remoteConsole').remoteConsoleInjector()

class App extends PureComponent {
  render() {
    // test error reporting per remtoteConsole
    // const foo = bar

    return (
      <>
        <h1 id="app_headline">@viewar/webpack up and running!</h1>
        <Test foo="bar" />
      </>
    )
  }
}

export default App
