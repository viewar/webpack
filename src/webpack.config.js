const merge = require('webpack-merge');

const { errorOnUsedPort, setEnvVariable, addEnvVariables } = require('./utils');
const getCommonConfig = require('./env/common.config');
const getDevelopConfig = require('./env/develop.config');
const production = require('./env/production.config');
const mock = require('./env/mock.config');

/**
 * @function
 * @file @viewar/webpack/webpack.config.js
 * @name getMergedConfig
 * @returns {Promise} webpack config
 */
const getMergedConfig = (env, args) => {
  const configCommon = getCommonConfig(env);

  // TODO: switch env and mode usage (see issue #35)
  // * env should match NODE_ENV (development|production)
  // * -> move '_mock' mark to mode
  process.env.NODE_ENV = env !== 'production' ? 'development' : 'production';
  process.env.WEBPACK_ENV = env;

  if (process.NODE_ENV === 'production') {
    // workaround for issue #35
    env = 'production';
  }

  // inject process.env vars
  for (let [key, value] of Object.entries(process.env)) {
    setEnvVariable(`process.env.${key}`, value);
  }

  if (env === 'production') {
    return merge(configCommon, production.config, addEnvVariables());
  }

  const developConfig = getDevelopConfig(env);
  const configDev = merge(configCommon, developConfig);

  return env === 'development_mock'
    ? merge(configDev, mock.config, addEnvVariables())
    : merge(configDev, addEnvVariables());
};

// TODO: fix to sync instead of async (for 3rd party usage like nextjs and others)
(async () => {
  if (process.env.NODE_ENV !== 'production') {
    await errorOnUsedPort();
  }
})();

module.exports = getMergedConfig;
