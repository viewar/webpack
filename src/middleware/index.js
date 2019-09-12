const { remoteConsoleMiddleware } = require('../utils/remoteConsole')
const { viewarCoreMiddleware } = require('./viewarCore')


const viewArMiddlleware = (app) => {
  remoteConsoleMiddleware(app)
  viewarCoreMiddleware(app)
}


module.exports = viewArMiddlleware
