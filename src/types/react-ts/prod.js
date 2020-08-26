// production config
const { join } = require('path')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { setEnvVariable } = require('../../utils')
const { PATHS } = require('../../constants')
const commonConfig = require('./common')

module.exports = () => merge(
  commonConfig(),
  {
    mode:   'production',
    entry:  [ join(PATHS.root, 'polyfills.tsx'), './src/index.tsx' ],
    output: {
      path:          PATHS.build,
      chunkFilename: 'vendor~index.js',
      filename:      'index.js',
    },
    optimization: {
      minimize:    false,
      splitChunks: {
        chunks:      'all',
        cacheGroups: {
          vendor: {
            test:     /[\\/]node_modules[\\/]/,
            priority: 1,
          },
        },
      },
    },
    plugins: [ new CopyWebpackPlugin([{
      from: 'assets',
      to:   'assets',
    }]) ],
  },
  setEnvVariable('process.env.NODE_ENV', 'production'),
)
