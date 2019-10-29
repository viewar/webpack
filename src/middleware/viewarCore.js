const path = require('path')
const UAParser = require('express-useragent')

/**
 * @function
 * @name viewarCoreMiddleware
 * @desc middleware for 'webpack-dev-server'
 * delivers '/viewar-core.js' on dev server (only for web version)
 * @memberof @viewar/webpack
 *
 * @param {ExpressInstance} app - instance of express.js server
 * @return {void}
 */
const viewarCoreMiddleware = (app) => {
  app.get('/viewar-core.js', (req, res) => {
    const { headers: { 'user-agent': userAgentString }} = req
    const { isMobile, isTablet } = UAParser.parse(userAgentString)

    if (isMobile || isTablet) {
      res.status(200).end()
    }
    else {
      res.set('Content-Type', 'application/javascript')
      res.status(200).sendFile(path.join(process.cwd(), 'node_modules', 'viewar-core/viewar-core.js'))
    }
  })
}

module.exports = {
  viewarCoreMiddleware,
}
