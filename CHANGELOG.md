# Changelog
> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

## [1.9.2](https://github.com/viewar/webpack/compare/v1.9.1...v1.9.2) (2020-01-02)


### Bug Fixes

* **viewarCore:** dont skip core endpoint ([6f154d0](https://github.com/viewar/webpack/commit/6f154d08cbb158c2aac8ef9fb6270a03ce413936)), closes [#35](https://github.com/viewar/webpack/issues/35)

## [1.9.1](https://github.com/viewar/webpack/compare/v1.9.0...v1.9.1) (2019-12-22)

### Bug Fixes

- **componentAssets:** fix win usage ([00e534d](https://github.com/viewar/webpack/commit/00e534d))

# [1.9.0](https://github.com/viewar/webpack/compare/v1.8.2...v1.9.0) (2019-12-20)

### Bug Fixes

- **file-loader:** fix public paths (use rel) ([02fdc44](https://github.com/viewar/webpack/commit/02fdc44))

### Features

- **urlLoader:** load assets of '@viewar/components' as base64 (<0.5MB) ([2569470](https://github.com/viewar/webpack/commit/2569470)), closes [viewar/components#52](https://github.com/viewar/components/issues/52)

## [1.8.2](https://github.com/viewar/webpack/compare/v1.8.1...v1.8.2) (2019-12-19)

### Bug Fixes

- **ci:** fix asset test ([8dfdd7a](https://github.com/viewar/webpack/commit/8dfdd7a))
- **file-loader:** use '[path]' instead of '[folder]' ([d28f541](https://github.com/viewar/webpack/commit/d28f541))
- **localIdentName:** prefix '[@viewar](https://github.com/viewar)' module classes with 'viewar'fixes [#80](https://github.com/viewar/webpack/issues/80) ([f3dffdb](https://github.com/viewar/webpack/commit/f3dffdb))
- look up module as last ([1f2f316](https://github.com/viewar/webpack/commit/1f2f316))

## [1.8.1](https://github.com/viewar/webpack/compare/v1.8.0...v1.8.1) (2019-12-18)

### Bug Fixes

- **CI:** fix commonConfig usage in 'karma.config' ([0666bae](https://github.com/viewar/webpack/commit/0666bae))
- **localIdentName:** use '[hash]' for production mode ([2117ee6](https://github.com/viewar/webpack/commit/2117ee6)), closes [#80](https://github.com/viewar/webpack/issues/80)
- **sass:** add '@viewar/components/dist/sass' to `sass.includePaths` ([5633a44](https://github.com/viewar/webpack/commit/5633a44)), closes [#79](https://github.com/viewar/webpack/issues/79) [viewar/components#1](https://github.com/viewar/components/issues/1)

# [1.8.0](https://github.com/viewar/webpack/compare/v1.7.0...v1.8.0) (2019-12-16)

### Bug Fixes

- **css-loader:** change `localIdentName` to '[folder]-[local]' ([a47bc83](https://github.com/viewar/webpack/commit/a47bc83))

# [1.7.0](https://github.com/viewar/webpack/compare/v1.6.0...v1.7.0) (2019-12-05)

### Bug Fixes

- **errorOnUsedPort:** make '@viewar/webpack' SYNC! ([8bf5520](https://github.com/viewar/webpack/commit/8bf5520))
- **errorOnUsedPort:** make '@viewar/webpack' SYNC! ([115a4e0](https://github.com/viewar/webpack/commit/115a4e0))

### Features

- **middlewares:** provide '@viewar/webpack/middlewares' ([#68](https://github.com/viewar/webpack/issues/68)) ([25fb80e](https://github.com/viewar/webpack/commit/25fb80e))
- **middlewares:** provide '@viewar/webpack/middlewares' ([#68](https://github.com/viewar/webpack/issues/68)) ([c9c42fa](https://github.com/viewar/webpack/commit/c9c42fa))

# [1.6.0](https://github.com/viewar/webpack/compare/v1.5.4...v1.6.0) (2019-11-23)

### Bug Fixes

- **CI:** use `npm install` ([f8478ea](https://github.com/viewar/webpack/commit/f8478ea))
- **lint:** fix 'no-console' lint errors ([ac35364](https://github.com/viewar/webpack/commit/ac35364))
- **sass:** fix global include paths ([6ca42da](https://github.com/viewar/webpack/commit/6ca42da))
- **scripts:** fix lint script ([12b95ca](https://github.com/viewar/webpack/commit/12b95ca))

### Features

- **CI:** use travis, as repo is now public ([a500e19](https://github.com/viewar/webpack/commit/a500e19))

## [1.5.4](https://github.com/viewar/webpack/compare/v1.5.3...v1.5.4) (2019-11-11)

### Bug Fixes

- **mockMode:** dont load 'viewar-core' in mock mode ([d4761b7](https://github.com/viewar/webpack/commit/d4761b7)), closes [viewar/webpack#35](https://github.com/viewar/webpack/issues/35)
- **mockMode:** dont load 'viewar-core' in mock mode ([65cf0bb](https://github.com/viewar/webpack/commit/65cf0bb)), closes [viewar/webpack#35](https://github.com/viewar/webpack/issues/35)

## [1.5.3](https://github.com/viewar/webpack/compare/v1.5.2...v1.5.3) (2019-11-09)

### Bug Fixes

- **karma:** export config via '@viewar/webpack/karma' ([dc14f9d](https://github.com/viewar/webpack/commit/dc14f9d))

## [1.5.2](https://github.com/viewar/webpack/compare/v1.5.1...v1.5.2) (2019-11-08)

### Bug Fixes

- **deps:** move "@babel/plugin-proposal-export-default-from" to save-deps ([c1c55a9](https://github.com/viewar/webpack/commit/c1c55a9))
- **deps:** move [@formatjs](https://github.com/formatjs) polyfill modules to save-deps ([4f3db82](https://github.com/viewar/webpack/commit/4f3db82))
- **deps:** move [@formatjs](https://github.com/formatjs) polyfill modules to save-deps ([caaeac1](https://github.com/viewar/webpack/commit/caaeac1))
- **deps:** move karma modules to save-deps ([aa5ceaf](https://github.com/viewar/webpack/commit/aa5ceaf))
- **file-loader:** load assets under "[folder]/[name].[ext]" ([8160930](https://github.com/viewar/webpack/commit/8160930))
- **file-loader:** load assets under "[folder]/[name].[ext]" ([f1e0e2e](https://github.com/viewar/webpack/commit/f1e0e2e))
- **karma:** fix typo in karma.config ('cheereo' -> 'cheerio') ([aa7e31e](https://github.com/viewar/webpack/commit/aa7e31e))
- **karma:** fix typo in karma.config ('cheereo' -> 'cheerio') ([86fed38](https://github.com/viewar/webpack/commit/86fed38))
- **karma:** preprocess 'PATH.src/\*_/_.js' with webpack ([823f7cd](https://github.com/viewar/webpack/commit/823f7cd))
- **karma:** preprocess 'PATH.src/\*_/_.js' with webpack ([47dbcb9](https://github.com/viewar/webpack/commit/47dbcb9))

## [1.5.1](https://github.com/viewar/webpack/compare/v1.5.0...v1.5.1) (2019-11-04)

### Bug Fixes

- **CI:** typo in merge ([34db122](https://github.com/viewar/webpack/commit/34db122))
- **deps:** fix bugs due to dep errors ([#27](https://github.com/viewar/webpack/issues/27)) ([#28](https://github.com/viewar/webpack/issues/28)) ([dcaaea5](https://github.com/viewar/webpack/commit/dcaaea5))

# [1.5.0](https://github.com/viewar/webpack/compare/v1.4.0...v1.5.0) (2019-11-04)

### Bug Fixes

- **CI:** add "karma" to pipeline ([0e01029](https://github.com/viewar/webpack/commit/0e01029))
- **CI:** install HeadlessChrome dependencies ([64b533c](https://github.com/viewar/webpack/commit/64b533c))
- **lint:** use latest '@viewar/config-eslint' from NPM registry ([89dacbb](https://github.com/viewar/webpack/commit/89dacbb))
- add mp4 to files loader ([096bcac](https://github.com/viewar/webpack/commit/096bcac))
- add mp4 to files loader ([66013ab](https://github.com/viewar/webpack/commit/66013ab))

### Features

- **release:** post releases to slack (semantic-release-slack-bot) ([938b8d7](https://github.com/viewar/webpack/commit/938b8d7))
- karma-webpack with mocha chai spec test ([ac10431](https://github.com/viewar/webpack/commit/ac10431)), closes [#24](https://github.com/viewar/webpack/issues/24)

# [1.4.0](https://github.com/viewar/webpack/compare/v1.3.0...v1.4.0) (2019-10-29)

### Features

- **semantic-release:** enable publishing to NPM registry ([635bfa8](https://github.com/viewar/webpack/commit/635bfa8))

# [1.3.0](https://github.com/viewar/webpack/compare/v1.2.0...v1.3.0) (2019-10-29)

### Bug Fixes

- **CI:** fix job names ([b2c0842](https://github.com/viewar/webpack/commit/b2c0842))
- **CI:** fix job names ([22703eb](https://github.com/viewar/webpack/commit/22703eb))
- **CI:** use circleCI ([#12](https://github.com/viewar/webpack/issues/12)) ([4d3388a](https://github.com/viewar/webpack/commit/4d3388a))
- **CI:** use circleCI ([#12](https://github.com/viewar/webpack/issues/12)) ([ee706d0](https://github.com/viewar/webpack/commit/ee706d0))
- **eslint:** use newer version of config "@viewar/config-eslint" ([5b27d32](https://github.com/viewar/webpack/commit/5b27d32))
- **eslint:** use newer version of config "@viewar/config-eslint" ([d6d0223](https://github.com/viewar/webpack/commit/d6d0223))
- **IDE:** add 'workingDirectories' ([75a2ab7](https://github.com/viewar/webpack/commit/75a2ab7))
- **lint:** add 'webpack.config.resolve.js' ([cf1d9b4](https://github.com/viewar/webpack/commit/cf1d9b4))
- use named export `remoteConsoleInjector()` ([d8c8af7](https://github.com/viewar/webpack/commit/d8c8af7))
- **IDE:** add 'workingDirectories' ([c1483b0](https://github.com/viewar/webpack/commit/c1483b0))
- **lint:** add 'webpack.config.resolve.js' ([ec73b5b](https://github.com/viewar/webpack/commit/ec73b5b))
- use named export `remoteConsoleInjector()` ([cb486a1](https://github.com/viewar/webpack/commit/cb486a1))

### Features

- **polyfill:** add polyfill for native Intl API ([872cad5](https://github.com/viewar/webpack/commit/872cad5))
- **polyfill:** add polyfill for native Intl API ([51f911a](https://github.com/viewar/webpack/commit/51f911a))

# [1.2.0](https://github.com/viewar/webpack/compare/v1.1.3...v1.2.0) (2019-10-10)

### Bug Fixes

- **CI:** explicitly permit deployment for "next" branch ([79c7d5c](https://github.com/viewar/webpack/commit/79c7d5c))

### Features

- **CI:** use TravisCI instead of circleCI ([adbdc8b](https://github.com/viewar/webpack/commit/adbdc8b))

## [1.1.3](https://github.com/viewar/webpack/compare/v1.1.2...v1.1.3) (2019-09-24)

### Bug Fixes

- **remoteConsole:** fix import as default ([4eeb46b](https://github.com/viewar/webpack/commit/4eeb46b))

## [1.1.2](https://github.com/viewar/webpack/compare/v1.1.1...v1.1.2) (2019-09-21)

### Bug Fixes

- **remoteConsole:** export injector seperately for client usage ([029a536](https://github.com/viewar/webpack/commit/029a536))
- **test:** run clean before test ([7ac0650](https://github.com/viewar/webpack/commit/7ac0650))

## [1.1.1](https://github.com/viewar/webpack/compare/v1.1.0...v1.1.1) (2019-09-20)

### Bug Fixes

- **dotenv:** remove requirement and dep ([09d410a](https://github.com/viewar/webpack/commit/09d410a))

# [1.1.0](https://github.com/viewar/webpack/compare/v1.0.0...v1.1.0) (2019-09-20)

### Bug Fixes

- **build:** fix `errorOnUsedPort()` ([bca08e6](https://github.com/viewar/webpack/commit/bca08e6))
- **config:** add additional webpack configs and use updated versions ([40d3f89](https://github.com/viewar/webpack/commit/40d3f89))
- **css-loader:** fix option scheme ([3a3455e](https://github.com/viewar/webpack/commit/3a3455e))
- **cssLoader:** use v3 config scheme (fix version to v3) ([e79e55d](https://github.com/viewar/webpack/commit/e79e55d))
- **deps:** move "express-useragent" to deps (!dev) ([6e0132a](https://github.com/viewar/webpack/commit/6e0132a))
- **semantic-release:** release on master ([e10707f](https://github.com/viewar/webpack/commit/e10707f))
- **viewar-core:** correct viewar-core.js import path ([85b25b7](https://github.com/viewar/webpack/commit/85b25b7))
- /configs -> /env + format ([5d1cd16](https://github.com/viewar/webpack/commit/5d1cd16))

### Features

- **eslint-import-resolver:** resolve WEBPACK_PATH per dotenv ([46b8eef](https://github.com/viewar/webpack/commit/46b8eef))
- **remoteConsole:** `import {remoteConsoleInjector} from '@viewar/webpack/remoteConsole` ([db50df6](https://github.com/viewar/webpack/commit/db50df6))
- **semantic-release:** release to GITHUB and push to BB ([b039af6](https://github.com/viewar/webpack/commit/b039af6))
- add 'lint-staged' ([3ea0890](https://github.com/viewar/webpack/commit/3ea0890))
- add circleCI config ([7662655](https://github.com/viewar/webpack/commit/7662655))
- deliver viewar-core.js per webpack dev server (check UA) ([33548e5](https://github.com/viewar/webpack/commit/33548e5))

# 1.0.0 (2019-09-02)
