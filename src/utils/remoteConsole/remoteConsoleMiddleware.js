const chalk = require('chalk')
const bodyParser = require('body-parser')

/**
 * @function
 * @name remoteConsoleMiddleware
 * @uses {express} webpack dev server instance
 * @usage {devServer: {before: remoteConsoleMiddleware}}
 *
 * @returns null
 */
const remoteConsoleMiddleware = (app) => {
  const colors = {
    log:   'white',
    info:  'white',
    warn:  'yellow',
    error: 'red',
  }

  app.use(bodyParser.json())
  app.post('/remote-console', bodyParser.json(), function(req, res) {
    const { type, args } = req.body
    const time = new Date().toLocaleTimeString()

    // catch native errors
    if (type === 'error' && args.length === 1) {
      // no spread operator! we just send Error.stack as string
      console.error(`[${time}][App]` + chalk[colors[type]](`[${type}]`), args[0])
    }
    else {
      console[type](`[${time}][App]` + chalk[colors[type]](`[${type}]`), ...args)
    }

    res.send()
  })
}

module.exports = { remoteConsoleMiddleware }
