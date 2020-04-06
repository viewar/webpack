const viewarWebpackConfig = require('./src/webpack.config.js')
const packageJson = require('./package.json')

console.info(`@viewar/webpack v${packageJson.version}`)

module.exports = viewarWebpackConfig
