const path = require('path')
// refactor: ? use yargs
const {
  WEBPACK_PATH, WEBPACK_BUILD, WEBPACK_ASSETS, WEBPACK_PORT,
} = process.env

const ROOT    = path.resolve(process.cwd())
const PATHS   = {
  root:            ROOT,
  build:           path.join(ROOT, WEBPACK_BUILD || 'build'),
  // TODO: rename marked as webpack root
  src:             path.join(ROOT, WEBPACK_PATH || 'src'),
  assets:             path.join(ROOT, WEBPACK_ASSETS || 'assets'),
  componentAssets: path.join(ROOT, 'node_modules/@viewar/components/dist/assets'),
  componentSass:   './node_modules/@viewar/components/dist/sass',
}

const PORT = WEBPACK_PORT || '8080'

const REGEXPS = {
  assets: /\.(eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|gif|svg|ico|mp4$/,
}

module.exports = {
  PATHS,
  PORT,
  REGEXPS,
}
