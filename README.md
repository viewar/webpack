# @viewar/webpack

[![CircleCI](https://circleci.com/gh/viewar/webpack.svg?style=shield&circle-token=89955835022246b062444ed0f36309353f919512)](https://circleci.com/gh/viewar/webpack)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/webpack&identifier=214175000)](https://dependabot.com)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![NPM Release](https://img.shields.io/npm/v/%40viewar%2Fwebpack.svg?style=flat)](https://www.npmjs.com/package/%40viewar%2Fwebpack)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

<!-- badge-urls -->

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

## Usage

**cli**

`webpack-dev --config ./node_modules/@viewar/webpack`  
`webpack-dev-server --config ./node_modules/@viewar/webpack`

**node - default**

```javascript
// webpack.config.js
module.exports = require('@viewar/webpack');
```

**node - extended**

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

#### module resolver

enables absolute import paths like `import Header from 'components/Header'`  
if you use '/src' for your webpack root, you probably don't have to change anything.

**default extensions:** `['.js', '.jsx', 'json']`  
**default module paths:** `[basename(PATHS.src), 'node_modules']`

overwrite PATHS.src with `WEBPACK_PATH` (see [constants](#constants)),  
or add your own 'webpack.config.resolve.js' in your workspace root:

```js
// {workspaceRoot}/webpack.config.resolve.js
const resolveConfig = {
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    // paths are relative to workspace root
    modules: ['myWebpackRootDir', 'node_modules'],
  },
};

module.exports = resolveConfig;
```

#### `errorOnUsedPort()`

before exporting the (promised) config,  
we **check if the port is free to use and throw an Error, if not.**

#### `remoteConsoleInjector()`

```javascript
// on client
import { remoteConsoleInjector } from '@viewar/webpack/remoteConsole';
remoteConsoleInjector();
```

**all native console outputs are sent to** our endpoint of remote-console,  
and get catched server-side to log them in **the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function: `webpackConfig.devServer.before = viewArMiddlleware;`
