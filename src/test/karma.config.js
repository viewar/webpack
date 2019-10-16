const commonConfig = require('../env/common.config')
const resolverConfig = require('../webpack.config.resolve')
const { PATHS } = require('../utils/constants')

const pattern = `${PATHS.root}/test/**/*.spec.js`

const preprocessors = {}
preprocessors[PATHS.root + '/test/**/*.spec.js'] = [ 'webpack', 'sourcemap' ]

module.exports = (config) => {
  config.set({
    browsers:   [ 'Chrome' ], // run in Chrome
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
