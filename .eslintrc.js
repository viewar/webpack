/** set ESLINT env vars
 *    used by #eslint-import-resolver-webpack'
 */
process.env.NODE_ENV = 'test';
process.env.WEBPACK_PATH = 'test';

module.exports = {
  extends: ['./node_modules/@viewar/config-eslint/env/react'],
  rules: {
    semi: ['error', 'never'],
    "react/jsx-filename-extension": 0,
    // conflicts between webpack- and node- resolver
    "node/no-missing-import": 0,
  }
}
