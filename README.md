# @viewar/webpack

[![CircleCI](https://circleci.com/gh/viewar/webpack.svg?style=shield&circle-token=89955835022246b062444ed0f36309353f919512)](https://circleci.com/gh/viewar/webpack)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/webpack&identifier=214175000)](https://dependabot.com)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

<!-- badge-urls -->

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

## Usage

**cli**

`webpack-dev-server --config @viewar/webpack`

**node - default**

```javascript
// webpack.config.js
module.exports = require('@viewar/webpack');
```

**node - merged**

```javascript
// webpack.config.js
const configViewAr = require('@viewar/webpack');
const merge = require('webpack-merge');

module.exports = async (...args) => {
  // configViewAr is ASYNC!
  const config = await configViewAr(...args);
  return merge(config, {
    plugins: [new MySpecialPlugin()],
  });
};
```

### Constants

| name        | default | env           |
| ----------- | ------- | ------------- |
| PATHS.src   | 'src'   | WEBPACK_PATH  |
| PATHS.build | 'build' | WEBPACK_BUILD |
| PORT        | 8080    | PORT          |

### Features

#### `errorOnUsedPort()`

before exporting the (promised) config,  
we check if the port is free to use and throw an Error, if not.

#### remote-console

```javascript
// client
import { remoteConsoleInjector } from '@viewar/webpack/remoteConsole';
remoteConsoleInjector();
```

**all native console outputs are sent to** our endpoint of remote-console,  
and get catched server-side to log them in **the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function: `webpackConfig.devServer.before = viewArMiddlleware;`

**TODO**

- [ ] use serialize instead of JSON.stringify
- [ ] fix doubled terminal output
- [ ] use error boundaries instead of window.on(error)

### module resolver

`import Header from 'components/Header'`

**our default resolber config:**

```javascript
const resolveConfig = {
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
    modules: [
      // PATHS.src = ROOT + WEBPACK_PATH || 'src'
      join(path.basename(PATHS.src), 'components'),
      basename(PATHS.src),
      'node_modules',
    ],
  },
};
```

overwrite PATHS.src with `WEBPACK_PATH` (see [constants](#constants)),  
or add your own 'webpack.config.resolve.js' in your workspace root.

#### TODOS

- alias config mapper for 'eslint-import-resolver-alias'
- resolve conflict of 'eslint-config-viewar' with `errorOnUsedPort()`

## ISSUES

### module resolver

#### aliase

eslint's import-resolvers [do not recognize resolve.alias](https://github.com/benmosher/eslint-plugin-import/issues/1451) from config.  
would need [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)

#### promised config

eslint-import-resolver-webpack doesn't handle Promises

## TODOS

- **ehance**
  - add [redbox-react](https://github.com/commissure/redbox-react)
  - add error boundaries (may belong to client packages)
  - start dev-server per script
    - add SSR!?
- **refactor**
  - `errorOnUsedPort()`: try to remove async fn
  - yargs and env vars (mode, etc.)
