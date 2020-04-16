const prod = require('./prod')
const devMock = require('./dev_mock')
const devCore = require('./dev_core')

module.exports = (env) => {
  if (env === 'production') {
    return prod(env)
  }

  return env === 'development_mock'
    ? devMock(env)
    : devCore(env)
}
