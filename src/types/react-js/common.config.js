const path = require('path')

const loaderUtils = require('loader-utils')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const Dotenv = require('dotenv-webpack')

const { PATHS, REGEXPS } = require('../../constants')
const { getViewARConfig } = require('../../utils')
const babelLoader = require('../../babel-loader.config') // also includes 'source-map-loader'
const { resolve } = require('../../webpack.config.resolve.js')

const { appId, appVersion } = getViewARConfig()

const getCommonConfig = (env) =>
  merge([
    {
      entry: {
        index: [ path.join(__dirname, '../..', 'utils', 'polyfills.js'), PATHS.src ],
      },
      module: {
        rules: [
          {
            test:    /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:     babelLoader,
          },
          {
            test: /\.(ts|tsx)$/,
            use:  [ ...babelLoader, 'awesome-typescript-loader' ],
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
                    // development - prefix css classnames of @viewar modules
                    // which are compiled at runtime - f.e. @viewar/components/dist/sass/viewar-styles
                    // TODO: production - use hash
                    // localIdentName: env === 'production' ? '[hash:base64:5]' : null,
                    getLocalIdent: (context, localIdentName, localName, options) => {
                      const isViewar = ~context.resourcePath.indexOf('@viewar')

                      let name = `[name]-${localName}`
                      name = (isViewar ? 'viewar-' : '') + name
                      return loaderUtils.interpolateName(context, name, options)
                    },
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
                      PATHS.componentSass,
                    ],
                  },
                },
              },
            ],
          },
          {
            test:    REGEXPS.assets,
            exclude: PATHS.componentAssets,
            use:     {
              loader:  'file-loader',
              options: {
                name:       '[path][name].[ext]',
                publicPath: '', // server path in DEV
                outputPath: '', // fs path in PROD
              },
            },
          },
          {
            test:    REGEXPS.assets,
            include: PATHS.componentAssets,
            use:     {
              loader:  'url-loader',
              options: {
                limit:      (1024 * 8) / 2,
                fallback:   'file-loader',
                // fallback options
                name:       '[path][name].[ext]',
                publicPath: '', // server path in DEV
                outputPath: '', // fs path in PROD
              },
            },
          },
        ],
      },
      resolve,
      plugins: [
        new CheckerPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].scss',
        }),
        new HtmlWebpackPlugin({
          template: (function() {
            try {
              // provide compatibility for old usage
              return require.resolve(path.join(PATHS.src, 'index.html'))
            }
            catch (err) {
              return require.resolve(path.join(PATHS.src, 'index.html.ejs'))
            }
          })(),
          inject:           true,
          bundleIdentifier: appId,
          bundleVersion:    appVersion,
        }),
        new Dotenv(),
      ],
    },
  ])

module.exports = getCommonConfig
