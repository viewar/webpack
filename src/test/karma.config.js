const commonConfig = require('../env/common.config')
const resolverConfig = require('../webpack.config.resolve')
const { PATHS } = require('../utils/constants')

module.exports = (config) => {
  // PRESETS
  //
  // file pattern
  const karmaTestGlob = 'test/**/*.spec.js'
  // const karmaTestGlob = 'src/test/mocha.entry.js'
  // preprocessors
  const preprocessors = {}
  preprocessors[karmaTestGlob] = [ 'webpack', 'sourcemap' ]
  preprocessors['src/**/*.js'] = [ 'webpack', 'sourcemap' ]
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
      'node_modules/@babel/polyfill/dist/polyfill.js',
      // process.cwd() + '/src/utils/babelRegister.js',
      process.cwd() + '/src/test/mocha.setup.js',
      {
        pattern: karmaTestGlob,
        // set `singleRun: false` if you want to watch files
        watched: true,
      },
    ],
    // TODO: enable dynamic object keys (karma.config.babel.js with babel/register)
    //* => use {[karmaTestGlob]: ['webpack', 'sourcemap']}
    preprocessors, // uses "karmaTestGlob"


    client:   {
      mocha:          {
        // mocha - overwrites (if you use multiple test runners)
        //
        // reporter: 'html',

        // mocha - mocha config
        //
        // require specific files after Mocha is initialized
        // require: [

        // ],
      },
    },

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
