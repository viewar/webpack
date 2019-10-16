import React, { PureComponent } from 'react'

import styles from 'App.scss' // eslint-disable-line no-unused-vars
import Test from 'test/components/Test'

require('../remoteConsole').remoteConsoleInjector()

class App extends PureComponent {
  render() {
    // test error reporting per remtoteConsole
    // const foo = bar

    return (
      <>
        <h1>@viewar/webpack up and running!</h1>
        <Test />
      </>
    )
  }
}

export default App
