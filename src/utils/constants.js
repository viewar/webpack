const path = require('path')
// refactor: ? use yargs
const { WEBPACK_PATH, WEBPACK_BUILD, WEBPACK_PORT } = process.env


const ROOT    = path.resolve(process.cwd())
const PATHS   = {
  root:  ROOT,
  build: path.join(ROOT, WEBPACK_BUILD || 'build'),
  // TODO: rename marked as webpack root
  src:   path.join(ROOT, WEBPACK_PATH || 'src'),
}

const PORT = WEBPACK_PORT || '8080'


module.exports = {
  PATHS,
  PORT,
}
