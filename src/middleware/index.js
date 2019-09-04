const { remoteConsoleMiddleware } = require('../utils/remoteConsole')


const viewArMiddlleware = (app) => {
  remoteConsoleMiddleware(app)
  // TODO: [VASB-4275] serve 'viewar-core' dependent on user agent
}


module.exports = viewArMiddlleware
