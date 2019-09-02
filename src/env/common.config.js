const path = require('path')

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {
  srcPath, getViewARConfig,
} = require('../utils')

const {
  appId, appVersion,
} = getViewARConfig()

exports.config = merge([
  {
    entry: {
      index: [ '@babel/polyfill', srcPath ],
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
            'style-loader',
            {
              loader:  'css-loader',
              options: {
                importLoaders:  1,
                modules:        true,
                localIdentName: '[name]-[local]',
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
                includePaths: [ 'css/' ],
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
    resolve: {
      extensions: [ '*', '.js', '.jsx' ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].scss',
      }),
      new HtmlWebpackPlugin({
        template:         path.join(srcPath, 'index.html'),
        inject:           true,
        bundleIdentifier: appId,
        bundleVersion:    appVersion,
      }),
    ],
  },
])
