import React, { PureComponent } from 'react'

import Test from 'components/Test'
import styles from 'App.scss'

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
