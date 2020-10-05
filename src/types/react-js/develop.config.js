const merge = require('webpack-merge')
const ip = require('ip').address()
const webpack = require('webpack')

const viewArMiddleware = require('../../middlewares')
const { setEnvVariable, printLaunchQRCode } = require('../../utils')
const { PATHS, PORT } = require('../../constants')

const getDevelopConfig = () => {
  printLaunchQRCode(ip, PORT)
  setEnvVariable('process.env.NODE_ENV', 'development')

  return merge([
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
        before: viewArMiddleware,
      },
      devtool: 'eval-cheap-source-map',
      output:  {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
      plugins: [ new webpack.HotModuleReplacementPlugin() ],
    },
  ])
}

module.exports = getDevelopConfig
