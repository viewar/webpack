// development config
const merge = require('webpack-merge')
const webpack = require('webpack')
const ip = require('ip').address()

const commonConfig = require('./common')
const { setEnvVariable, printLaunchQRCode } = require('../../utils')
const viewArMiddleware = require('../../middlewares')

const PORT = process.env.PORT || '8080'

module.exports = () => {
  printLaunchQRCode(ip, PORT)
  setEnvVariable('process.env.NODE_ENV', 'mock')

  return merge(
    commonConfig(),
    {
      mode:  'development',
      entry: [
        'react-hot-loader/patch', // activate HMR for React
        `webpack-dev-server/client?http://${
          ip ? `${ip}:${PORT}` : 'localhost:8080'
        }`, // bundle the client for webpack-dev-server and connect to the provided endpoint
        'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './polyfills.tsx', // polyfills
        './src/index.tsx', // the entry point of our app
      ],
      devServer: {
        hot:      true, // enable HMR on the server
        'public': ip ? `${ip}:${PORT}` : true,
        host:     process.env.HOST || '0.0.0.0',
        port:     PORT,
        before:   viewArMiddleware,
      },
      devtool: 'cheap-module-eval-source-map',
      plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
      ],
    },
  )
}
