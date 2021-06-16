const path = require('path')

const getConfigCommon = require('../types/react-js/common.config')
const resolverConfig = require('../webpack.config.resolve')
const { PATHS } = require('../constants')

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development'

const configCommon = getConfigCommon(env)

module.exports = (config) => {
  // PRESETS
  //
  // file pattern
  const karmaTestGlob = PATHS.src + '/**/*.spec.js'
  // preprocessors
  const preprocessors = {}
  preprocessors[karmaTestGlob] = [ 'webpack', 'sourcemap' ]
  // for module development
  preprocessors['src/**/*.js'] = [ 'webpack', 'sourcemap' ]
  // for app development
  preprocessors[PATHS.src + '/**/*.js'] = [ 'webpack', 'sourcemap' ]
  preprocessors['node_modules/@viewar/webpack/**/*.js'] = [ 'webpack', 'sourcemap' ]
  preprocessors['node_modules/core-js/**/index.js'] = [ 'webpack', 'sourcemap' ]

  // ChromeHeadless - set path for binary
  // see: https://github.com/karma-runner/karma-chrome-launcher#headless-chromium-with-puppeteer
  process.env.CHROME_BIN = require('puppeteer').executablePath()

  // KARMA CONFIG
  //
  config.set({
    // BASIC
    singleRun:  true,
    frameworks: [ 'mocha' ], // test runner
    browsers:   [ process.env.CI ? 'ChromeHeadlessNoSandbox' : 'Chrome' ],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    plugins:    [
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
    ],
    // FILE ASSOCIATIONS
    basePath:   PATHS.root,
    files:      [
      // FYI: @babel/polyfill is deprecated, so we migrated to core-js@3
      // see: https://babeljs.io/docs/en/babel-polyfill
      // require.resolve('@babel/polyfill/dist/polyfill.js'),
      path.join('./node_modules/regenerator-runtime/runtime.js'),
      path.join('./node_modules/core-js/stable/index.js'),
      // as we ignore webpacks entries - we have to add polyfills here also
      path.join(__dirname, 'mocha.setup.js'),
      {
        pattern: karmaTestGlob,
        // set `singleRun: false` if you want to watch files
        watched: true,
      },
    ],

    preprocessors, // uses "karmaTestGlob"

    // overwrite 'webpack' configuration
    webpack: {
      ...configCommon,
      mode:      'development',
      devtool:   'inline-source-map',
      externals: {
        domutils: 'true',
        cheerio:  'window', // needed for 'chai-enzyme' assertions
      },
      resolve: resolverConfig.resolve,
    },
    // overwrite 'webpack-dev-middleware' configuration
    webpackMiddleware: { noInfo: true },

    reporters: [ 'mocha' ],
  })
}
