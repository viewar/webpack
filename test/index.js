import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

import '@babel/polyfill'

const rootElement = document.getElementById('app-root') || document.getElementById('app')

const render = (Component) => {
  ReactDOM.render(
    <Component />, rootElement
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    // TODO: no need for new require!?
    const App = require('./App').default
    render(App)
  })
}
