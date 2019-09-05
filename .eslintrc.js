module.exports = {
  extends: ['viewar/env/react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.json'],
      },
      webpack:  {
        // TODO: require.resolve('eslint-config-viewar/resolve')
        config: './src/webpack.config.resolve.js',
        env:    'lint'
      }
    },
  },
  rules: {
    semi: ['error', 'never']
  }
}
