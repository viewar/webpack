const viewarWebpackConfig = require('./src/webpack.config.js')
const remoteConsoleInjector = require('./src/utils/remoteConsole/remoteConsoleInjector')

const ViewarWebpack = (module.exports = viewarWebpackConfig)

ViewarWebpack.remoteConsoleInjector = remoteConsoleInjector
