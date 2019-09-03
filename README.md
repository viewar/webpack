# @viewar/webpack

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

> **to be refactored:** reject/resolve promise?

before exporting the (promised) config, we check if the port is free to use  
and throw an Error, if not. (kills the process)

#### remote-console

> **to be refactored:**  
> use serialize, catch native errors, prevent doubled output in browser, ...

**all native console outputs are sent** to our endpoint of remote-console,  
and get catched server-side to log them **in the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function,  
which allows us to add our own express-middleware(s)

## TODOS

- refactor
  - check port BEFORE webpack-dev-server
    - ? IIFE async on file-header
    - ? npm run checkPort && npm run start
    - ? start dev-server per node-script
  - handle args/envVars
  - env/mode
- ehance
  - add build script
  - add test script
  - start dev-server per script
    - add SSR!?
- peerDependencies? (f.e. webpack and babel)
