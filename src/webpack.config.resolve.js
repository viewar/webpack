const { join } = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { PATHS } = require('./constants')

const resolveConfig = {
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    alias:      { // ? already included into tsconfigs paths
      assets: PATHS.assets,
    },
  },
}

// check if tsconfig is present
const tsconfigPath = join(PATHS.root, 'tsconfig.json')
try {
  require(tsconfigPath)
  if (process.env.DEBUG) {
    console.log('\n[@viewar/webpack] tsconfig is PRESENT, so we USE \'tsconfig-paths-webpack-plugin\'\n\n')
  }

  resolveConfig.resolve.plugins = [ new TsconfigPathsPlugin({
    configFile: tsconfigPath,
  }) ]
}
catch (e) {
  if (process.env.DEBUG) {
    console.log('\n[@viewar/webpack] tsconfig is NOT PRESENT, so we DON\'T USE \'tsconfig-paths-webpack-plugin\'\n\n')
  }
}

module.exports = resolveConfig
