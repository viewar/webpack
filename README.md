# @viewar/webpack

## Usage

**default**

```javascript
// webpack.config.js
module.exports = require('@viewar/webpack');
```

**merged**

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

## TODOS

- refactor
  - handle args/envVars
  - env/mode
- ehance
  - add build script
  - add test script
  - start dev-server per script
    - add SSR!?
