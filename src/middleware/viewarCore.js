const path = require('path')
const UAParser = require('express-useragent')


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
