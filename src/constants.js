const path = require('path')

/**
 * PATHS
 */
const ROOT    = path.join(__dirname, '..')

const PATHS = {
  root:  ROOT,
  build: path.join(ROOT, 'build'),
  src:   process.env.WEBPACK_PATH
    ? path.join(ROOT, process.env.WEBPACK_PATH)
    : path.join(ROOT, 'src'),
}

/**
 * NETWORK
 */
const PORT = process.env.PORT || '8080'


module.exports = {
  PATHS,
  PORT,
}
