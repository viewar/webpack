const remoteConsoleMiddleware = require('../utils/remoteConsole/remoteConsoleMiddleware')
const viewarCoreMiddleware = require('./viewarCoreMiddleware')

const viewArMiddleware = (app) => {
  remoteConsoleMiddleware(app)
  viewarCoreMiddleware(app)
}

module.exports = viewArMiddleware
