const path = require('path')

const commonConfig = require('../env/common.config')
const resolverConfig = require('../webpack.config.resolve')
const { PATHS } = require('../utils/constants')

const isModule = process.cwd().indexOf('@viewar/webpack') !== -1

module.exports = (config) => {
  // PRESETS
  //
  // file pattern
  const karmaTestGlob = PATHS.src + '/**/*.spec.js'
  // preprocessors
  const preprocessors = {}
  preprocessors[karmaTestGlob] = [ 'webpack', 'sourcemap' ]
  preprocessors['src/**/*.js'] = [ 'webpack', 'sourcemap' ] // for development
  // TODO: add dist/mocha.setup.js
  preprocessors['node_modules/@viewar/webpack/**/*.js'] = [ 'webpack', 'sourcemap' ] // for module
  // ChromeHeadless - set path for binary
  // see: https://github.com/karma-runner/karma-chrome-launcher#headless-chromium-with-puppeteer
  process.env.CHROME_BIN = require('puppeteer').executablePath()

  // KARMA CONFIG
  //
  config.set({
    // BASIC
    singleRun:  true,
    frameworks: [ 'mocha' ], // test runner
    browsers:   [ process.env.CI ? 'ChromeHeadless' : 'Chrome' ],
    plugins:    [
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-nyan-reporter',
      'karma-mocha-reporter',
    ],
    // FILE ASSOCIATIONS
    basePath:   PATHS.root,
    files:      [
      // as we ignore webpacks entries - we have to add polyfills here also
      require.resolve('@babel/polyfill/dist/polyfill.js'),
      // process.cwd() + '/src/utils/babelRegister.js',
      path.join(__dirname, 'mocha.setup.js'),
      {
        pattern: karmaTestGlob,
        // set `singleRun: false` if you want to watch files
        watched: true,
      },
    ],
    // TODO: enable dynamic object keys (karma.config.babel.js with babel/register)
    //* => use {[karmaTestGlob]: ['webpack', 'sourcemap']}
    preprocessors, // uses "karmaTestGlob"

    // overwrite 'webpack' configuration
    webpack: {
      ...commonConfig.config,
      mode:      'development',
      devtool:   'inline-source-map',
      externals: {
        domutils: 'true',
        cheereo:  'window', // needed for 'chai-enzyme' assertions
        // TODO: clearify 'react-addons' usage
        // 'react/addons':                   true,
        // 'react/lib/ExecutionEnvironment': true,
        // 'react/lib/ReactContext':         true,
      },
      resolve:   resolverConfig.resolve,
    },
    // overwrite 'webpack-dev-middleware' configuration
    webpackMiddleware: { noInfo: true },

    reporters:    [ process.env.CI ? 'mocha' : 'nyan' ],
    nyanReporter: { suppressErrorHighlighting: false },
  })
}
