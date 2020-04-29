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

> **latest [CHANGELOG](https://github.com/viewar/webpack/blob/master/CHANGELOG.md)**
>
> **ATTENTION:** All [conventional-commits](https://conventionalcommits.org) merged into master will trigger a new release!

- [Installation](#installation)
- [Usage](#usage)
- [Constants](#constants)
- [Features](#features)
  - [Module Resolver](#module-resolver)
  - [remote console](#remote-console)
  - [errorOnUsedPort()](#erroronusedport)
  - [Integration Tests per 'karma-webpack'](#integration-tests-per-karma-webpack)
    - [Configuration](#configuration)
    - [Writing Tests](#writing-tests)

## Installation

`npm i @viewar/webpack`  
`npm i karma --save-dev` if you use karma

> **includes all packages related to webpack:**  
> \*-loader's, babel-presets/plugins, typescript-presets/plugins, karma-plugins + puppeteer, sass/postcss, etc.

## Usage

> **Info:** no need to add babel config to your package.json,  
> as it is already included in webpacks babel-loader options

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

**node - project types**

@viewar/webpack is able to handle different types of projects:

- "react-js": React with Javascript (default)
- ~~"react-ts": React with Typescript~~ (deprecated)
- "angular": Angular - not available yet
- "angularjs: AngularJS - not available yet

```jsx
// webpack.config.js
const configViewAr = require('@viewar/webpack');

module.exports = (env) => {
  // Use react with typescript as project type.
  return configViewAr(env, {
    type: 'react-js',
  });
};
```

**cli**

`webpack-dev --config ./node_modules/@viewar/webpack` or  
`webpack-dev-server --config ./node_modules/@viewar/webpack`

## Constants

| name         | default  | env overwrite  |
| ------------ | -------- | -------------- |
| PATHS.src    | 'src'    | WEBPACK_PATH   |
| PATHS.assets | 'assets' | WEBPACK_ASSETS |
| PATHS.build  | 'build'  | WEBPACK_BUILD  |
| PORT         | 8080     | PORT           |

## Features

### Module Resolver

- **enables absolute import paths**  
  like `import Header from 'components/Header'`

- **uses '[tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin#readme)'** to resolve import paths  
  **requires:** workspaceRoot/tsconfig.json
- **if tsconfig.json is not present** it won't use that plugin  
  but you can modify the resolve config to fit your project:

  ```js
  // webpack.config.js
  const configViewAr = require('@viewar/webpack');

  module.exports = (env) => {
    // Use react with typescript as project type.
    const config = configViewAr(env, {
      type: 'react-js',
    });

    config.resolve = {
      extensions: ['.jsx', '.js', '.json'],
      modules: [YOUR - MODULE - PATHS, 'node_modules'],
      alias: [YOUR - ALIAS - CONFIG],
    };

    return config;
  };
  ```

  for more information see [webpack's resolve config](https://webpack.js.org/configuration/resolve/)

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
`npx karma start ./node_modules/@viewar/webpack/karma`

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
