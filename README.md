# @viewar/webpack

![cross-env][cross-env-img]
![Maintenance][maintenance-img]

[cross-env-img]: https://img.shields.io/badge/%E2%9C%94-cross--env-green
[maintenance-img]: https://img.shields.io/badge/%E2%9C%94-maintained-green.svg

## Usage

**cli**

`webpack-dev-server --config ./node_modules/viewar-webpack`

**node - default**

```javascript
// webpack.config.js
module.exports = require('@viewar/webpack');
```

**node - merged**

```javascript
// webpack.config.js
const merge = require('webpack-merge');
const configViewAr = require('../src/webpack.config');

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
| PORT        | 8080    | WEBPACK_PORT  |

### Features

#### `errorOnUsedPort()`

before exporting the (promised) config, we check if the port is free to use  
and throw an Error, if not. (kills the process)

#### remote-console

**all native console outputs are sent to** our endpoint of remote-console,  
and get catched server-side to log them in **the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function,  
which allows us to add our own express-middlewares

**TODO**

- [x] catch native errors
- [ ] use serialize instead of JSON.stringify
- [ ] fix doubled terminal output
- [ ] use error boundaries instead of window.on(error)  
       see src/utils/polyfills.js

### module resolver

we lookup `WEBPACK_PATH` (see [constants](#constants)) relative to the working directory
so you can just `import Header from 'components/Header'` anywhere in your webpack dir

if you use another webpack root than default you have to add your `WEBPACK_PATH` to the env
either per CLI or per `.env` file in your workspace root

## ISSUES

### module resolver

#### aliase

eslint's import-resolvers do not recognize resolve.alias from config.  
_(there are already [a load of issues](https://github.com/benmosher/eslint-plugin-import/issues/1451) open for that)_

would need [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)  
TODO: build mapper, which reads resolver.config.js
and transform data into scheme of eslint-import-resolver-alias

#### promised config

// eslint-import-resolver-webpack doesn't hanlde Promises

so we use an extra file to define the resolver config: `./src/webpack.config.resolve.js`
will be located in root/configs - see todos

## TODOS

- **ehance**
  - check if you're root in ? pre-script ? webpack config
  - add [redbox-react](https://github.com/commissure/redbox-react)
  - add error boundaries (may belong to client packages)
  - add build script
  - add test script
  - start dev-server per script
    - add SSR!?
  - peerDependencies? (f.e. webpack and babel)
  - `webpack.config.resolve.js`
    - in workspace root ? enables to use default node-usage with additional resovler options
    - => handle webpack.env "lint" to return promise.resolve
- **refactor**
  - `errorOnUsedPort()`
    - ? IIFE async on file-header
    - ? npm run checkPort && npm run start
    - ? start dev-server per node-script
  - handle args/envVars
  - args and env vars (mode, etc.)
