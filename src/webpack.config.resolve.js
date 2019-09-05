const { basename, join } = require('path')

const { PATHS } = require('./utils/constants')
// TODO: check for 'resolver.config.js' in root/configs

const resolveConfig = {
  resolve: {
    root:       true,
    extensions: [ '.js', '.jsx', 'json' ],
    modules:    [ join(basename(PATHS.src), 'components'), basename(PATHS.src), 'node_modules' ],
  },
}

module.exports = resolveConfig
