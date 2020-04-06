const merge = require('webpack-merge')

const { setEnvVariable } = require('../../utils')
const { PATHS } = require('../../constants')

exports.config = merge([
  {
    output: {
      path:          PATHS.build,
      chunkFilename: '[name].js',
      filename:      '[name].js',
    },
    optimization: {
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
  },
  setEnvVariable('process.env.NODE_ENV', 'production'),
])
