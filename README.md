# @viewar/webpack

[![Build Status](https://travis-ci.com/viewar/webpack.svg?branch=master)](https://travis-ci.com/viewar/webpack)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![NPM Release](https://img.shields.io/npm/v/%40viewar%2Fwebpack.svg?style=flat)](https://www.npmjs.com/package/%40viewar%2Fwebpack)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

<!-- badge-urls -->

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

### Installation

`npm i @viewar/webpack`  
`npm i puppeteer` _- if you use karma_

### Usage

> **Info:** no need to add babel config to your package.json,  
> as it is already included in webpacks babel-loader options  
> **also** removes necessity to install babel plugins and presets

**node - default**

```javascript
// webpack.config.js
module.exports = require('@viewar/webpack');
```

**node - extended**

```jsx
// webpack.config.js
const configViewAr = require('@viewar/webpack');

module.exports = (env) => {
  const config = configViewAr(env);
  // modify config as you need
  config.plugins.push(new MySpecialPlugin());
  return config;
};
```

**cli**

`webpack-dev --config ./node_modules/@viewar/webpack` or  
`webpack-dev-server --config ./node_modules/@viewar/webpack`

### Constants

| name        | default | env overwrite |
| ----------- | ------- | ------------- |
| PATHS.src   | 'src'   | WEBPACK_PATH  |
| PATHS.build | 'build' | WEBPACK_BUILD |
| PORT        | 8080    | PORT          |

## Features

### Module Resolver

> **enables absolute import paths like `import Header from 'components/Header'`**  
> _if you use '/src' for your webpack root, you probably don't have to change anything._

default extensions: `['.js', '.jsx', 'json', '*']`  
default module paths: `[basename(PATHS.src), 'node_modules']`

_TODO:_ change to aliases to use `~components/*` (see issue #108)

**modify resolve directories**  
overwrite PATHS.src with `WEBPACK_PATH` (see [constants](#constants)),  
or add your own 'webpack.config.resolve.js' in your workspace root:

```js
// {workspaceRoot}/webpack.config.resolve.js
const resolveConfig = {
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    // paths are relative to workspace root
    modules: [PATHS.src, 'node_modules'],
  },
};

module.exports = resolveConfig;
```

### remote console

```javascript
// on client
import { remoteConsoleInjector } from '@viewar/webpack/remoteConsole';

remoteConsoleInjector();
```

**all native console outputs are sent to** our endpoint of remote-console,  
and get catched server-side to log them in **the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function:  
`webpackConfig.devServer.before = viewArMiddleware;`

_TODO:_ see issues #17 and #39

### errorOnUsedPort()

before exporting the config,  
**we check if the port is free to use and throw an Error, if not.**

### Integration Tests per 'karma-webpack'

> may be moved to own package together with cypress setup in undefined future

**Usage**  
`npx karma --config ./node_modules/@viewar/webpack/karma`

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
