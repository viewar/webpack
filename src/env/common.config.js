const path = require('path')
const loaderUtils = require('loader-utils')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { PATHS } = require('../utils/constants')
const { getViewARConfig } = require('../utils')
const { resolve } = require('../webpack.config.resolve.js')

const { appId, appVersion } = getViewARConfig()

const getCommonConfig = (env) => {
  return merge([
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
                  importLoaders: 1,
                  modules:       {
                    // development - prefix css classnames
                    // of SCSS files in @viewar packages which are compiled at runtime
                    // f.e. @viewar/components/dist/sass/viewar-styles
                    getLocalIdent: (context, localIdentName, localName, options) => {
                      const isViewar = ~context.resourcePath.indexOf('@viewar')

                      let name = `[folder]-${localName}`
                      name = (isViewar ? 'viewar-' : '') + name
                      return loaderUtils.interpolateName(context, name, options)
                    },
                    // TODO: production - use hash
                    // localIdentName: env === 'production' ? '[hash:base64:5]' : null,
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
                  sourceMap:   true,
                  sassOptions: {
                    includePaths: [
                      './sass', // default viewar structure
                      `${path.basename(PATHS.src)}/sass`,
                      './css', // ! compatibility with old setting
                      // enables `@import 'viewar-styles'`
                      // TODO: ? use sass-resource-loader
                      './node_modules/@viewar/components/dist/sass',
                    ],
                  },
                },
              },
            ],
          },
          {
            test: /\.(eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|svg|gif|ico|mp4$/,
            use:  {
              loader:  'file-loader',
              options: {
                name:       '[path]/[name].[ext]',
                publicPath: '/', // server path in DEV
                outputPath: '/', // fs path in PROD
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
}

module.exports = getCommonConfig
