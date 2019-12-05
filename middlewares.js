const viewarMiddleware = require('./src/middlewares') // combined middlewares
const viewarCoreMiddleware = require('./src/middlewares/viewarCoreMiddleware')
const remoteConsoleMiddleware = require('./src/utils/remoteConsole/remoteConsoleMiddleware')

module.exports = {
  viewarMiddleware,
  viewarCoreMiddleware,
  remoteConsoleMiddleware,
}
