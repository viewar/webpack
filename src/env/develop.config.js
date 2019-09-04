const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const ip = require('ip').address()
const webpack = require('webpack')

const viewArMiddlleware = require('../middleware')

exports.config = merge([
  {
    devServer: {
      'public':      ip ? `${ip}:${PORT}` : null,
      host:        process.env.HOST || '0.0.0.0',
      port:        PORT,
      contentBase: PATHS.build,
      hot:         true,
      before:      viewArMiddlleware,
    },
    devtool: 'inline-source-map',
    output:  {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
  },
  setFreeVariable('process.env.NODE_ENV', 'development'),
])

exports.core = merge([
  {
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: 'node_modules/viewar-core/viewar-core.js',
            to:   'viewar-core.js',
          },
        ],
        {
          copyUnmodified: true,
        }
      ),
    ],
  },
  setFreeVariable('process.env.NODE_ENV', 'core'),
])

exports.mock = merge([ setFreeVariable('process.env.NODE_ENV', 'mock') ])
