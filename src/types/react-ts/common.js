// shared config (dev and prod)
const { join } = require('path')
const path = require('path')

const { CheckerPlugin } = require('awesome-typescript-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { PATHS } = require('../../constants')
const { getViewARConfig } = require('../../utils')
const { resolve } = require('../../webpack.config.resolve.js')

const { appId, appVersion } = getViewARConfig()

module.exports = () => {
  return {
    resolve,
    module: {
      rules: [
        {
          test:    /\.js$/,
          use:     [ 'babel-loader', 'source-map-loader' ],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use:  [ 'babel-loader', 'awesome-typescript-loader' ],
        },
        {
          test: /\.s?css$/,
          use:  [
            'style-loader',
            {
              loader:  'css-loader',
              options: {
                importLoaders: 1,
                modules:       {
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
            'sass-loader',
          ],
        },
        /* Use file loader for asset images. */
        {
          test:    /\.svg$/,
          // issuer: [{ test: /\.(sa|sc|c|le)ss$/i }],
          include: [ PATHS.assets ],
          use:     [
            {
              loader:  'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
            {
              loader:  'svgo-loader',
              options: {
                plugins: [
                  { removeViewBox: false },
                  { removeAttributes: false },
                  { removeTitle: true },
                  { convertColors: { shorthex: false }},
                  { convertPathData: false },
                ],
              },
            },
          ],
        },
        /* Inline SVGs from src folder. */
        {
          test:    /\.svg$/,
          // issuer: [{ not: [{ test: /\.(sa|sc|c|le)ss$/i }] }],
          include: [ PATHS.src ],
          use:     [
            {
              loader:  'react-svg-loader',
              options: {
                jsx:  false,
                svgo: {
                  plugins: [
                    { removeViewBox: false },
                    { removeAttributes: false },
                    { removeTitle: true },
                    { convertColors: { shorthex: false }},
                    { convertPathData: false },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|gif|ico$/i,
          use:  [
            {
              loader:  'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].scss',
      }),
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        template:         join(PATHS.src, 'index.html.ejs'),
        inject:           true,
        bundleIdentifier: appId,
        bundleVersion:    appVersion,
      }),
    ],
    performance: {
      hints: false,
    },
  }
}
