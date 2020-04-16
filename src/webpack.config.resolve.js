// const { basename, join } = require('path')

// const { PATHS } = require('./constants')
// // TODO: check for 'resolver.config.js' in root/configs

// const resolveConfig = {
//   resolve: {
//     extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
//     modules:    [ join(basename(PATHS.src), 'components'), basename(PATHS.src), 'node_modules' ],
//   },
// }

// module.exports = resolveConfig

const { join } = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { PATHS } = require('./constants')

const resolveConfig = {
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    alias:      { // ? already included into tsconfigs paths
      assets: PATHS.assets,
    },
    plugins: (function() {
      if (process.env.WEBPACK_TYPE === 'react-ts') {
        return [ new TsconfigPathsPlugin({
          configFile: join(PATHS.root, 'tsconfig.json'),
        }) ]
      }
    })(),
  },
}

module.exports = resolveConfig
