const { basename, join } = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { PATHS } = require('./constants')

const resolveConfig = {
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
  },
}

// check if tsconfig is present
const tsconfigPath = join(PATHS.root, 'tsconfig.json')
let tsconfigIsPresent = false
try {
  require(tsconfigPath)
  tsconfigIsPresent = true

  if (process.env.DEBUG) {
    console.log('\n[@viewar/webpack] tsconfig is PRESENT, so we USE \'tsconfig-paths-webpack-plugin\'\n\n')
  }
}
catch (e) {
  if (process.env.DEBUG) {
    console.log('\n[@viewar/webpack] tsconfig is NOT PRESENT, so we DON\'T USE \'tsconfig-paths-webpack-plugin\'\n\n')
  }
}

if (tsconfigIsPresent) {
  // use tsconfig-paths-webpack-plugin
  resolveConfig.resolve.plugins = [ new TsconfigPathsPlugin({
    configFile: tsconfigPath,
  }) ]
}
else {
  // use default resolve config
  resolveConfig.resolve.alias = { assets: PATHS.assets }
  resolveConfig.resolve.modules = [
    basename(PATHS.src), 'node_modules',
  ]
}

module.exports = resolveConfig
