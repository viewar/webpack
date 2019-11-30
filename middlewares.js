const viewareMiddleware = require('./src/middlewares')
const viewarCoreMiddleware = require('./src/middlewares/viewarCoreMiddleware')
const remoteConsoleMiddleware = require('./src/utils/remoteConsole/remoteConsoleMiddleware')

module.exports = {
  viewareMiddleware,
  viewarCoreMiddleware,
  remoteConsoleMiddleware,
}
