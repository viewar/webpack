import React from 'react'
import ReactDOM from 'react-dom'

import App from 'App'


const rootElement = document.getElementById('app-root') || document.getElementById('app')

const render = (Component) => {
  ReactDOM.render(
    <Component />, rootElement
  )
}

render(App)

if (module.hot) {
  // TODO: migrate to latest 'react-hot-update'
  module.hot.accept(App, () => {
    render(App)
  })
}
