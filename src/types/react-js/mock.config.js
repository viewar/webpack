const merge = require('webpack-merge')

const utils = require('../../utils')

exports.config = merge([ utils.setEnvVariable('process.env.NODE_ENV', 'mock') ])
