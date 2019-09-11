# @viewar/webpack

[![CircleCI status][circle-ci-status-img]](https://circleci.com/bb/viewar_sf/viewar-webpack/tree/master)

[circle-ci-status-img]: https://circleci.com/bb/viewar_sf/viewar-webpack.svg?style=svg

## Usage

**cli**

`webpack-dev-server --config ./node_modules/@viewar/webpack`

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

- [ ] use serialize instead of JSON.stringify
- [ ] fix doubled terminal output
- [ ] use error boundaries instead of window.on(error)

### module resolver

we lookup `WEBPACK_PATH` (see [constants](#constants)) relative to the working directory
so you can just `import Header from 'components/Header'` anywhere in your webpack dir

if you use another webpack root than default you have to add your `WEBPACK_PATH` to the env

## ISSUES

### module resolver

#### aliase

eslint's import-resolvers [do not recognize resolve.alias](https://github.com/benmosher/eslint-plugin-import/issues/1451) from config.  
would need [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)  

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
  - build mapper, which reads resolver.config.js  
  and transform data into scheme of eslint-import-resolver-alias
- **refactor**
  - `errorOnUsedPort()`
    - try to remove async fn
    - ? start dev-server per node-script
  - handle args/envVars
  - args and env vars (mode, etc.)
