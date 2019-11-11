const { remoteConsoleMiddleware } = require('../utils/remoteConsole/remoteConsoleMiddleware')
const { viewarCoreMiddleware } = require('./viewarCore')


const viewArMiddleware = (app) => {
  remoteConsoleMiddleware(app)

  if (process.env.WEBPACK_ENV !== 'development_mock') {
    viewarCoreMiddleware(app)
  }
}


module.exports = viewArMiddleware
