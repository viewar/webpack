const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const chalk = require('chalk')
const { isFreePort } = require('node-port-check')
const qrcode = require('qrcode-terminal')

const { PORT, PATHS } = require('../constants')

let envVariable = {}

const addEnvVariables = () => {
  return {
    plugins: [ new webpack.DefinePlugin(envVariable) ],
  }
}

const setEnvVariable = (key, value) => {
  envVariable[key] = JSON.stringify(value)
}

const getViewARConfig = () => {
  let config = null;
  try {
    config = JSON.parse(fs.readFileSync(path.join(PATHS.root, 'viewar-config.json')));
  } catch (e) {}

  if (!config) {
    try {
      config = JSON.parse(fs.readFileSync(path.join(PATHS.root, '.viewar-config')));
    } catch (e) {}
  }

  if (!config) {
    // eslint-disable-next-line no-console
    console.error(
      '[ViewAR] ERROR: File viewar-config.json not existing or invalid JSON format.'
    );

    config = {};
  }

  return config;
};

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
  const url = `viewarsdk://sdk/ID:${appId}/version:${appVersion}/debug:true/debugIP:${ip}//debugPort:${port}`

  qrcode.generate(url, { small: true })
}

module.exports = {
  errorOnUsedPort,
  getViewARConfig,
  printLaunchQRCode,
  addEnvVariables,
  setEnvVariable,
}
