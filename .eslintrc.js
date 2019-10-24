module.exports = {
  extends: [
    require.resolve('@viewar/config-eslint/env/react')
  ],
  rules: {
    "node/no-missing-import": 0,
    semi: ['error', 'never'],
    "react/jsx-filename-extension": 0
  }
}
