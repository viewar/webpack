# Changelog
> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.5.0](https://github.com/viewar/webpack/compare/v1.4.0...v1.5.0) (2019-11-04)


### Bug Fixes

* **CI:** add "karma" to pipeline ([0e01029](https://github.com/viewar/webpack/commit/0e0102925da2427780fe004fe7bd5957969babdb))
* add mp4 to files loader ([096bcac](https://github.com/viewar/webpack/commit/096bcac37dc4bade45d5edfad9bcbf3de05daef4))
* **CI:** install HeadlessChrome dependencies ([64b533c](https://github.com/viewar/webpack/commit/64b533cbcf6fd476b15b4b6b50d0ca19ef44dfe8))
* **lint:** use latest '@viewar/config-eslint' from NPM registry ([89dacbb](https://github.com/viewar/webpack/commit/89dacbb2c44fee5d94b86a47a8522fcd54bab031))


### Features

* karma-webpack with mocha chai spec test ([ac10431](https://github.com/viewar/webpack/commit/ac1043109fe8148457fd1ddfa6ed5499b0f5eebd)), closes [#24](https://github.com/viewar/webpack/issues/24)
* **release:** post releases to slack (semantic-release-slack-bot) ([938b8d7](https://github.com/viewar/webpack/commit/938b8d7085c678677b87d81e1df8ea2999d071b7))

# [1.4.0](https://github.com/viewar/webpack/compare/v1.3.0...v1.4.0) (2019-10-29)


### Bug Fixes

* **lint:** add 'webpack.config.resolve.js' ([ec73b5b](https://github.com/viewar/webpack/commit/ec73b5b2b3a315a6090102f876274c754c1bf607))
* **IDE:** add 'workingDirectories' ([c1483b0](https://github.com/viewar/webpack/commit/c1483b0298031850cc948088a14a5879efd327d1))
* **CI:** fix job names ([22703eb](https://github.com/viewar/webpack/commit/22703eb79f3a96f9da62f0910648e8be29fe768f))
* **CI:** use circleCI ([#12](https://github.com/viewar/webpack/issues/12)) ([ee706d0](https://github.com/viewar/webpack/commit/ee706d0f1c2637f087928da84429977ea258ebd6))
* use named export `remoteConsoleInjector()` ([cb486a1](https://github.com/viewar/webpack/commit/cb486a1362026394b798f97a673bdc760f05e69d))
* **eslint:** use newer version of config "@viewar/config-eslint" ([d6d0223](https://github.com/viewar/webpack/commit/d6d022313cde11dc8339a329b0423d72dca5b857))


### Features

* **polyfill:** add polyfill for native Intl API ([51f911a](https://github.com/viewar/webpack/commit/51f911a3b3f71d10bd99cf748a84ecf8e82915c2))
* **semantic-release:** enable publishing to NPM registry ([635bfa8](https://github.com/viewar/webpack/commit/635bfa83000b3f8f72bb17f2d95bc16afde4b6b3))

# [1.3.0](https://github.com/viewar/webpack/compare/v1.2.0...v1.3.0) (2019-10-29)


### Bug Fixes

* **lint:** add 'webpack.config.resolve.js' ([cf1d9b4](https://github.com/viewar/webpack/commit/cf1d9b4bd6c283958f5611d19ccc2159069c3e0f))
* **IDE:** add 'workingDirectories' ([75a2ab7](https://github.com/viewar/webpack/commit/75a2ab7cdd2d5299095288ab775588651693279d))
* **CI:** fix job names ([b2c0842](https://github.com/viewar/webpack/commit/b2c084282e73d31c590c34800ec02dcf9cd00f20))
* **CI:** use circleCI ([#12](https://github.com/viewar/webpack/issues/12)) ([4d3388a](https://github.com/viewar/webpack/commit/4d3388a3ccd4f1c2235ad6211015f21f32cfd2cc))
* use named export `remoteConsoleInjector()` ([d8c8af7](https://github.com/viewar/webpack/commit/d8c8af7f3902544763cc93a3a4a19a372c544855))
* **eslint:** use newer version of config "@viewar/config-eslint" ([5b27d32](https://github.com/viewar/webpack/commit/5b27d32556809590b98c4fdb898c1f9548899734))


### Features

* **polyfill:** add polyfill for native Intl API ([872cad5](https://github.com/viewar/webpack/commit/872cad5bda713d4ce93fe3452c94609dd6a224b6))

# [1.2.0](https://github.com/viewar/webpack/compare/v1.1.3...v1.2.0) (2019-10-10)


### Bug Fixes

* **CI:** explicitly permit deployment for "next" branch ([79c7d5c](https://github.com/viewar/webpack/commit/79c7d5c1b43a2bdf8aab566ca8ec79ef92dccf6b))


### Features

* **CI:** use TravisCI instead of circleCI ([adbdc8b](https://github.com/viewar/webpack/commit/adbdc8bc3e68d0dcc1a70d2ebfaf719c04969828))

## [1.1.3](https://github.com/DoubleU23/viewar-webpack/compare/v1.1.2...v1.1.3) (2019-09-24)


### Bug Fixes

* **remoteConsole:** fix import as default ([4eeb46b](https://github.com/DoubleU23/viewar-webpack/commit/4eeb46b))

## [1.1.2](https://github.com/DoubleU23/viewar-webpack/compare/v1.1.1...v1.1.2) (2019-09-21)


### Bug Fixes

* **remoteConsole:** export injector seperately for client usage ([029a536](https://github.com/DoubleU23/viewar-webpack/commit/029a536))
* **test:** run clean before test ([7ac0650](https://github.com/DoubleU23/viewar-webpack/commit/7ac0650))

## [1.1.1](https://github.com/DoubleU23/viewar-webpack/compare/v1.1.0...v1.1.1) (2019-09-20)


### Bug Fixes

* **dotenv:** remove requirement and dep ([09d410a](https://github.com/DoubleU23/viewar-webpack/commit/09d410a))

# [1.1.0](https://github.com/DoubleU23/viewar-webpack/compare/v1.0.0...v1.1.0) (2019-09-20)


### Bug Fixes

* /configs -> /env + format ([5d1cd16](https://github.com/DoubleU23/viewar-webpack/commit/5d1cd16))
* **config:** add additional webpack configs and use updated versions ([40d3f89](https://github.com/DoubleU23/viewar-webpack/commit/40d3f89))
* **viewar-core:** correct viewar-core.js import path ([85b25b7](https://github.com/DoubleU23/viewar-webpack/commit/85b25b7))
* **build:** fix `errorOnUsedPort()` ([bca08e6](https://github.com/DoubleU23/viewar-webpack/commit/bca08e6))
* **css-loader:** fix option scheme ([3a3455e](https://github.com/DoubleU23/viewar-webpack/commit/3a3455e))
* **deps:** move "express-useragent" to deps (!dev) ([6e0132a](https://github.com/DoubleU23/viewar-webpack/commit/6e0132a))
* **semantic-release:** release on master ([e10707f](https://github.com/DoubleU23/viewar-webpack/commit/e10707f))
* **cssLoader:** use v3 config scheme (fix version to v3) ([e79e55d](https://github.com/DoubleU23/viewar-webpack/commit/e79e55d))


### Features

* **remoteConsole:** `import {remoteConsoleInjector} from '@viewar/webpack/remoteConsole` ([db50df6](https://github.com/DoubleU23/viewar-webpack/commit/db50df6))
* add 'lint-staged' ([3ea0890](https://github.com/DoubleU23/viewar-webpack/commit/3ea0890))
* add circleCI config ([7662655](https://github.com/DoubleU23/viewar-webpack/commit/7662655))
* deliver viewar-core.js per webpack dev server (check UA) ([33548e5](https://github.com/DoubleU23/viewar-webpack/commit/33548e5))
* **semantic-release:** release to GITHUB and push to BB ([b039af6](https://github.com/DoubleU23/viewar-webpack/commit/b039af6))
* **eslint-import-resolver:** resolve WEBPACK_PATH per dotenv ([46b8eef](https://github.com/DoubleU23/viewar-webpack/commit/46b8eef))

# 1.0.0 (2019-09-02)

🎉 _initial commit_
