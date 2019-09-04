const chalk = require('chalk')
const bodyParser = require('body-parser')

/**
 * SERVER
 *
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

/**
 * @function
 * @name remoteConsoleInjector
 * @uses {console} native browser console
 * @returns null
 *
 * Responsible for sending console output to webpack-dev-server, so
 * you can remotely see your device's console output where you've
 * started npm run start:mock/npm run start.
 */
const remoteConsoleInjector = () => {
  if (isInjected) {
    return false
  }
  // Persist original console output functions.
  const original = {
    log:   console.log,
    info:  console.info,
    warn:  console.warn,
    error: console.error,
  }

  // Log to remote console + original console output.
  const remoteConsole = (type, args) => {
    // Original console output.
    original[type](...args) // TODO: fix dobled output (call original only on client!)

    // tansform native errors
    args = args.map((arg) => (arg instanceof Error ? arg.stack : arg))

    // Send to remote console.
    const url = '/remote-console'
    const xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({
      type,
      args,
    }))
  }

  // Hijack console output functions.
  Object.assign(window.console, {
    log:   (...args) => remoteConsole('log', args),
    info:  (...args) => remoteConsole('info', args),
    warn:  (...args) => remoteConsole('warn', args),
    error: (...args) => remoteConsole('error', args),
  })

  isInjected = true

  return remoteConsole
}
let isInjected = false

module.exports = {
  remoteConsoleMiddleware,
  remoteConsoleInjector,
}
