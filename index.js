const viewarWebpackConfig = require('./src/webpack.config.js')
const remoteConsoleInjector = require('./src/utils/remoteConsole/remoteConsoleInjector')
const { remoteConsoleMiddleware } = require('./src/utils/remoteConsole/remoteConsoleMiddleware')
const { viewArMiddleware } = require('./src/middleware/viewarCore')

// * default export
const ViewarWebpack = module.exports = viewarWebpackConfig

// * named exports
ViewarWebpack.viewArMiddleware = viewArMiddleware
ViewarWebpack.remoteConsoleInjector = remoteConsoleInjector
ViewarWebpack.remoteConsoleMiddleware = remoteConsoleMiddleware
