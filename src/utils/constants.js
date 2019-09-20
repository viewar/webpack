const path = require('path')
const dotEnv = require('dotenv')
const { WEBPACK_PATH, WEBPACK_BUILD, WEBPACK_PORT } = dotEnv.config().parsed


const ROOT    = path.resolve(process.cwd())
const PATHS   = {
  root:  ROOT,
  build: path.join(ROOT, process.env.WEBPACK_BUILD || WEBPACK_BUILD || 'build'),
  src:   path.join(ROOT, process.env.WEBPACK_PATH || WEBPACK_PATH || 'src'),
}

// TODO: ? use yargs
// .env overrules env vars
const PORT = WEBPACK_PORT || process.env.PORT || '8080'


module.exports = {
  PATHS,
  PORT,
}
