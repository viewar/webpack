const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const chalk = require('chalk')
const { isFreePort } = require('node-port-check')
const QRCode = require('qrcode')

const { PORT, PATHS } = require('../constants')

let envVariable = {};

const addEnvVariables = () => {
  return {
    plugins: [ new webpack.DefinePlugin(envVariable) ],
  }
}

const setEnvVariable = (key, value) => {
  envVariable[key] = JSON.stringify(value)
}

const getViewARConfig = () => {
  try {
    return JSON.parse(fs.readFileSync(path.join(PATHS.root, '.viewar-config')))
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      '[ViewAR] ERROR: File .viewar-config not existing or invalid JSON format.',
    )
    return {}
  }
}

/* eslint-disable */
// TODO: reject promise with error?
const errorOnUsedPort = (port) =>
  isFreePort(port || PORT).then(([, , isFree]) => {
    if (isFree) {
      return true;
    } else {
      console.error(
        chalk`\n{bold.rgb(195,20,20) [ViewAR] Error: PORT "${PORT}" in use!\n}{rgb(195,20,20) Please, verify if there is another watcher running,}`,
        chalk`\n{rgb(195,20,20) or change port manually via env var: 'PORT=8888 npm run start'\n}`
      );
      process.exit(1);
    }
  });
/* eslint-enable */

const printLaunchQRCode = (ip, port) => {
  const { appId, appVersion } = getViewARConfig()
  const url = `viewarsdk://sdk/ID:${appId}/version:${appVersion}/debug:true/debugIP:${ip}//debugPort:${port}/#/startXYZ`
  QRCode.toString(url, { type: 'terminal' }, (err, url) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(url)
  })
}

module.exports = {
  errorOnUsedPort,
  getViewARConfig,
  printLaunchQRCode,
  addEnvVariables,
  setEnvVariable,
}
