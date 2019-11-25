# @viewar/webpack

[![Build Status](https://travis-ci.com/viewar/webpack.svg?branch=master)](https://travis-ci.com/viewar/webpack)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/webpack&identifier=214175000)](https://dependabot.com)
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

## Constants

| name        | default | env           |
| ----------- | ------- | ------------- |
| PATHS.src   | 'src'   | WEBPACK_PATH  |
| PATHS.build | 'build' | WEBPACK_BUILD |
| PORT        | 8080    | PORT          |

## Features

### Integration Tests per 'karma-webpack'

> may be moved to own package together with cypress setup in undefined future

**Usage**  
`npm run karma`

**Explanation**  
[Karma](https://karma-runner.github.io/latest/index.html) is a test runner for JavaScript applications with several features integrated:

- **real browser instances - no fake DOM!**  
  supports Chrome, Firefox, IE11+, Safari  
  uses headless chrome in CI environment
- **native webpack module bundling**  
  '[karma-webpack](https://github.com/webpack-contrib/karma-webpack)' lets you use your projects webpack config
- **built-in mocha runner**
  - '[chai](https://github.com/chaijs/chai)' for unit-test assertions (expect, should, ...)
  - '[enzyme](https://github.com/airbnb/enzyme)' for integration-tests (shallow, mount, render)
  - '[chai-enzyme](https://github.com/producthunt/chai-enzyme)' for extended integration-tests assetions

#### Configuration

**karma - src/test/karma.config.js**  
contains karma-config: file pattern, karma plugins, browser settings, usw, ...

**mocha - src/test/mocha.setup.js**  
contains mocha setup: configures chai-enzyme and sets up global assertion functions

#### Writing Tests

- **example integration tests**  
  `/test/App.spec.js` and `/test/components/Test.spec.js`
- **component related assertions** ➡️ '[chai-enzyme](https://github.com/producthunt/chai-enzyme)'

### Module Resolver

**enables absolute import paths like `import Header from 'components/Header'`**  
_if you use '/src' for your webpack root, you probably don't have to change anything._

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

### `errorOnUsedPort()`

before exporting the (promised) config,  
**we check if the port is free to use and throw an Error, if not.**

### `remoteConsoleInjector()`

```javascript
// on client
import { remoteConsoleInjector } from '@viewar/webpack/remoteConsole';
remoteConsoleInjector();
```

**all native console outputs are sent to** our endpoint of remote-console,  
and get catched server-side to log them in **the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function:  
`webpackConfig.devServer.before = viewArMiddlleware;`
