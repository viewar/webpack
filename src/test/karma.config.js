const commonConfig = require('../env/common.config')
const resolverConfig = require('../webpack.config.resolve')
const { PATHS } = require('../utils/constants')

const pattern = `${PATHS.root}/test/**/*.spec.js`

const preprocessors = {}
preprocessors[PATHS.root + '/test/**/*.spec.js'] = [ 'webpack', 'sourcemap' ]

module.exports = (config) => {
  config.set({
    singleRun:  true, // just run once by default
    frameworks: [ 'mocha' ],
    reporters:  [ 'dots' ],
    // ... normal karma configuration
    files:      [
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
      'karma-phantomjs-launcher',
    ],
    customLaunchers: {
      phantomjs_custom: {
        base:    'PhantomJS',
        options: {
          windowName: 'viewar-karma-webpack',
          settings:   {
            webSecurityEnabled: false,
          },
        },
        flags:               [ '--load-images=true' ],
        debug:               true,
        // Have phantomjs exit if a ResourceError is encountered
        // (useful if karma exits without killing phantom)
        exitOnResourceError: true,
      },
    },
    // use headless (!) phantomjs on CI like travis
    // TODO: use ChromeHeadless for CI
    browsers: [ process.env.CI ? 'phantomjs_custom' : 'Chrome' ],

    preprocessors,

    webpack: {
      ...commonConfig.config,
      mode:      'development',
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      // webpack configuration
      devtool:   'inline-source-map',
      resolve:   resolverConfig.resolve,
      externals: {
        domutils:                         'true',
        cheereo:                          'window',
        'react/addons':                   true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext':         true,
      },
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      // stats: 'errors-only',
      noInfo: true,
    },
  })
}
