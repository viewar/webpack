const path = require('path')

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { PATHS } = require('../utils/constants')
const { getViewARConfig } = require('../utils')
const { resolve } = require('../webpack.config.resolve')

const {
  appId, appVersion,
} = getViewARConfig()


exports.config = merge([
  {
    entry: {
      index: [ path.join(__dirname, '..', 'utils', 'polyfills.js'), PATHS.src ],
    },
    module: {
      rules: [
        {
          test:    /\.(js|jsx)$/,
          exclude: /node_modules/,
          use:     [ 'babel-loader' ],
        },
        {
          test: /\.s?css$/,
          use:  [
            {
              loader:  'style-loader',
              options: {
                injectType: 'singletonStyleTag',
              },
            },
            {
              loader:  'css-loader',
              options: {
                importLoaders:  1,
                modules:        {
                  localIdentName: '[name]-[local]',
                },
              },
            },
            {
              loader:  'postcss-loader',
              options: {
                ident:   'postcss',
                plugins: (loader) => [ require('postcss-preset-env')() ],
              },
            },
            {
              loader: 'sass-loader',
              query:  {
                sourceMap:    true,
                sassOptions: {
                  includePaths: [ 'css/' ],
                },
              },
            },
          ],
        },
        {
          test: /\.(eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|svg|gif|ico$/,
          use:  {
            loader:  'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        },
      ],
    },
    resolve,
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].scss',
      }),
      new HtmlWebpackPlugin({
        template:         path.join(PATHS.src, 'index.html'),
        inject:           true,
        bundleIdentifier: appId,
        bundleVersion:    appVersion,
      }),
    ],
  },
])
