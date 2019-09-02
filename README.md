# @viewar/webpack

## usage


```javascript
// webpack.config.js

import {merge} from 'webpack-merge';
import configViewAr from '@viewar/webpack'

const config = merge(configViewAr, {
    ...customOverwrites
});

export default config;
```

