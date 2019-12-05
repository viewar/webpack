const merge = require('webpack-merge')
const ip = require('ip').address()
const webpack = require('webpack')

const viewArMiddlleware = require('../middlewares')
const { setFreeVariable } = require('../utils')
const { PATHS, PORT } = require('../utils/constants')

exports.config = merge([
  {
    devServer: {
      'public':      ip ? `${ip}:${PORT}` : null,
      host:        process.env.HOST || '0.0.0.0',
      port:        PORT,
      contentBase: PATHS.build,
      hot:         true,
      overlay:     {
        warnings: false,
        errors:   true,
      },
      before: viewArMiddlleware,
    },
    devtool: 'inline-source-map',
    output:  {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
  },
  setFreeVariable('process.env.NODE_ENV', 'development'),
])
