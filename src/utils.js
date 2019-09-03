const fs = require('fs')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const { isFreePort } = require('node-port-check')

const { PORT } = require('./constants')

const setFreeVariable = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)

  return {
    plugins: [ new webpack.DefinePlugin(env) ],
  }
}

const getViewARConfig = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/../.viewar-config`))
  }
  catch (e) {
    console.error(
      '[ViewAR] ERROR: File .viewar-config not existing or invalid JSON format.'
    )
    return {}
  }
}

/* eslint-disable */
// TODO: reject promise with error?
const errorOnUsedPort = (port) =>
  isFreePort(port || PORT).then(([ , , isFree ]) => {
    if (isFree) {
      return true
    }
    else {
      console.error(
        chalk`\n{bold.rgb(195,20,20) [ViewAR] Error: PORT "${PORT}" in use!\n}{rgb(195,20,20) Please, verify if there is another watcher running,}`,
        chalk`\n{rgb(195,20,20) or change port manually via env var: 'PORT=8888 npm run start'\n}`
      )
      process.exit(1)
    }
  })
/* eslint-enable */

// Webpack-dev-server's before function to receive remote console output.
const before = (app) => {
  const colors = {
    log:   'white',
    info:  'white',
    warn:  'yellow',
    error: 'red',
  }

  app.use(bodyParser.json())
  app.post('/remote-console', bodyParser.json(), function(req, res) {
    const {
      type, args,
    } = req.body
    const time = new Date().toLocaleTimeString()
    console[type](`[${time}][App]` + chalk[colors[type]](`[${type}]`), ...args)
    res.send()
  })
}

module.exports = {
  setFreeVariable,
  getViewARConfig,
  before,
  errorOnUsedPort,
}
