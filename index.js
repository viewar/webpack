const viewarWebpackConfig = require('./src/webpack.config.js')
const packageJson = require('./package.json')

console.info(`ViewAR Version: @viewar/webpack v${packageJson.version}`)

module.exports = viewarWebpackConfig
