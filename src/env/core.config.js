const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')

const utils = require('../utils')
const { PATHS } = require('../utils/constants')

exports.config = merge([
  {
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: 'node_modules/viewar-core/viewar-core.js',
            to:   'viewar-core.js',
          },
          {
            from: path.join(PATHS.src, '/assets/**/*'),
            to:   '/assets',
          },
        ],
        {
          copyUnmodified: true,
        },
      ),
    ],
  },
  // TODO: process.env.NODE_ENV should be (development | production)
  utils.setFreeVariable('process.env.NODE_ENV', 'core'),
])
