const commonConfig = require('../env/common.config')
const resolverConfig = require('../webpack.config.resolve')
const { PATHS } = require('../utils/constants')

const pattern = 'test/**/*.spec.js'
const preprocessors = {}
preprocessors[pattern] = [ 'webpack', 'sourcemap' ]

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = (config) => {
  const mochaRequire = []
  if (process.env.CI) {
    // altough, we use webpack as preprocessor
    // phantomJS seems to need babelRegister - Chrome not!?
    mochaRequire.push(require.resolve(`${PATHS.root}/src/utils/babelRegister`))
  }
  config.set({
    basePath:   PATHS.root,
    singleRun:  true, // just run once by default
    frameworks: [ 'mocha' ],
    files:      [
      'node_modules/@babel/polyfill/dist/polyfill.js',
      {
        pattern,
        watched: false,
      },
    ],
    plugins:  [
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-nyan-reporter',
    ],
    // customLaunchers: {
    //   phantomjs_custom: {
    //     base:    'PhantomJS',
    //     options: {
    //       windowName: 'viewar-karma-webpack',
    //       settings:   {
    //         webSecurityEnabled: false,
    //       },
    //     },
    //     flags:               [ '--load-images=true' ],
    //     debug:               true,
    //     // Have phantomjs exit if a ResourceError is encountered
    //     // (useful if karma exits without killing phantom)
    //     exitOnResourceError: true,
    //   },
    // },
    // use headless (!) phantomjs on CI like travis
    preprocessors,

    // TODO: use ChromeHeadless for CI
    browsers: [ process.env.CI ? 'ChromeHeadless' : 'Chrome' ],
    client:   {
      // capture all console output and pipe it to the terminal, true is default
      captureConsole: false,
      // if true, Karma clears the context window upon the completion of running the tests, true is default
      clearContext:   false,
      // run the tests on the same window as the client, without using iframe or a new window, false is default
      runInParent:    false,
      // true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
      useIframe:      true,
      mocha:          {
        // // change Karma's debug.html to the mocha web reporter
        // reporter: 'html',

        // require specific files after Mocha is initialized
        // require: mochaRequire,

        // custom ui, defined in required file above
        // ui: 'bdd-lazy-var/global',
      },
    },

    webpack: {
      ...commonConfig.config,
      mode:      'development',
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      // webpack configuration
      devtool:   'inline-source-map',
      externals: {
        domutils:                         'true',
        cheereo:                          'window',
        // 'react/addons':                   true,
        // 'react/lib/ExecutionEnvironment': true,
        // 'react/lib/ReactContext':         true,
      },
      resolve:   resolverConfig.resolve,
    },

    reporters:    [ 'nyan' ],

    nyanReporter: {
      suppressErrorHighlighting: true,
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      // stats: 'errors-only',
      noInfo: true,
    },
  })
}
