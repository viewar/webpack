# Changelog
> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.8.0](https://github.com/viewar/webpack/compare/v1.7.0...v1.8.0) (2019-12-16)


### Bug Fixes

* **css-loader:** change `localIdentName` to '[folder]-[local]' ([a47bc83](https://github.com/viewar/webpack/commit/a47bc83f84f711260ac1ef0ec722763ea4a668a7))
* **errorOnUsedPort:** make '@viewar/webpack' SYNC! ([115a4e0](https://github.com/viewar/webpack/commit/115a4e02b8e48ecce5e73ffd5103b0dab087b4db))


### Features

* **middlewares:** provide '@viewar/webpack/middlewares' ([#68](https://github.com/viewar/webpack/issues/68)) ([c9c42fa](https://github.com/viewar/webpack/commit/c9c42facac736495fca5ed83c98b6907ff754503))

# [1.7.0](https://github.com/viewar/webpack/compare/v1.6.0...v1.7.0) (2019-12-05)


### Bug Fixes

* **errorOnUsedPort:** make '@viewar/webpack' SYNC! ([8bf5520](https://github.com/viewar/webpack/commit/8bf5520e03670aa14fb90e1f91815f8ccabd69e9))


### Features

* **middlewares:** provide '@viewar/webpack/middlewares' ([#68](https://github.com/viewar/webpack/issues/68)) ([25fb80e](https://github.com/viewar/webpack/commit/25fb80ef475908aa8d6385a884f37d305fe4de54))

# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.6.0](https://github.com/viewar/webpack/compare/v1.5.4...v1.6.0) (2019-11-23)

### Bug Fixes

- **mockMode:** dont load 'viewar-core' in mock mode ([65cf0bb](https://github.com/viewar/webpack/commit/65cf0bb4b14b3771efb8068212811460cb26239d)), closes [viewar/webpack#35](https://github.com/viewar/webpack/issues/35)
- **lint:** fix 'no-console' lint errors ([ac35364](https://github.com/viewar/webpack/commit/ac35364b23681e7a552b53838f499792fde3723a))
- **sass:** fix global include paths ([6ca42da](https://github.com/viewar/webpack/commit/6ca42da284a2cf4dd2306c8cfeb72c063f9b9f93))
- **scripts:** fix lint script ([12b95ca](https://github.com/viewar/webpack/commit/12b95ca4b2be34ff1afe07c4ee7313f416a8d144))
- **CI:** use `npm install` ([f8478ea](https://github.com/viewar/webpack/commit/f8478ea9a0c323ab5700a75016e1694a954586e3))

### Features

- **CI:** use travis, as repo is now public ([a500e19](https://github.com/viewar/webpack/commit/a500e19d12622f79b90b9510cb711851e7e13fa1))

# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

## [1.5.4](https://github.com/viewar/webpack/compare/v1.5.3...v1.5.4) (2019-11-11)

### Bug Fixes

- **mockMode:** dont load 'viewar-core' in mock mode ([d4761b7](https://github.com/viewar/webpack/commit/d4761b7b88e447e069d38480ea86e5666af15dee)), closes [viewar/webpack#35](https://github.com/viewar/webpack/issues/35)

## [1.5.3](https://github.com/viewar/webpack/compare/v1.5.2...v1.5.3) (2019-11-09)

### Bug Fixes

- **karma:** export config via '@viewar/webpack/karma' ([dc14f9d](https://github.com/viewar/webpack/commit/dc14f9dd5812b5a9d86f2f9a743a2aedf7821ae9))
- **karma:** fix typo in karma.config ('cheereo' -> 'cheerio') ([86fed38](https://github.com/viewar/webpack/commit/86fed38dd5ea12377ceb2476c0058aeaded02275))
- **file-loader:** load assets under "[folder]/[name].[ext]" ([f1e0e2e](https://github.com/viewar/webpack/commit/f1e0e2ec19be6ee04bfd13daadac605ae600323d))
- **deps:** move [@formatjs](https://github.com/formatjs) polyfill modules to save-deps ([caaeac1](https://github.com/viewar/webpack/commit/caaeac1dbd7fccd1de9ceeb22ea295d57d62268b))
- **karma:** preprocess 'PATH.src/\*_/_.js' with webpack ([47dbcb9](https://github.com/viewar/webpack/commit/47dbcb976a7206f68dd4818e67cc3798f9237fa6))

## [1.5.2](https://github.com/viewar/webpack/compare/v1.5.1...v1.5.2) (2019-11-08)

### Bug Fixes

- **karma:** fix typo in karma.config ('cheereo' -> 'cheerio') ([aa7e31e](https://github.com/viewar/webpack/commit/aa7e31e44d7c041b12a029718fa21e0b81ee391c))
- **file-loader:** load assets under "[folder]/[name].[ext]" ([8160930](https://github.com/viewar/webpack/commit/81609303b95210b843167eab38383715af4a525f))
- **deps:** move "@babel/plugin-proposal-export-default-from" to save-deps ([c1c55a9](https://github.com/viewar/webpack/commit/c1c55a9630cb72b384d22a64e790a874c3525dd6))
- **deps:** move [@formatjs](https://github.com/formatjs) polyfill modules to save-deps ([4f3db82](https://github.com/viewar/webpack/commit/4f3db82024cb5e4fe24bf72ab43db3b12c388bbe))
- **deps:** move karma modules to save-deps ([aa5ceaf](https://github.com/viewar/webpack/commit/aa5ceafabf18dc3c4ee1b366564beb44f95fb220))
- **karma:** preprocess 'PATH.src/\*_/_.js' with webpack ([823f7cd](https://github.com/viewar/webpack/commit/823f7cda5c6b5291f375b4059f518373cebbd36f))

## [1.5.1](https://github.com/viewar/webpack/compare/v1.5.0...v1.5.1) (2019-11-04)

### Bug Fixes

- add mp4 to files loader ([66013ab](https://github.com/viewar/webpack/commit/66013abac67b1c83ec7de2a3a968f9cedf9c038a))
- **deps:** fix bugs due to dep errors ([#27](https://github.com/viewar/webpack/issues/27)) ([#28](https://github.com/viewar/webpack/issues/28)) ([dcaaea5](https://github.com/viewar/webpack/commit/dcaaea51007ebd1d37bed79d66357ca6b327c331))
- **CI:** typo in merge ([34db122](https://github.com/viewar/webpack/commit/34db1225fb1e0ae0fa84ecffa6ea6aba6db9ad3c))

# [1.5.0](https://github.com/viewar/webpack/compare/v1.4.0...v1.5.0) (2019-11-04)

### Bug Fixes

- **CI:** add "karma" to pipeline ([0e01029](https://github.com/viewar/webpack/commit/0e0102925da2427780fe004fe7bd5957969babdb))
- add mp4 to files loader ([096bcac](https://github.com/viewar/webpack/commit/096bcac37dc4bade45d5edfad9bcbf3de05daef4))
- **CI:** install HeadlessChrome dependencies ([64b533c](https://github.com/viewar/webpack/commit/64b533cbcf6fd476b15b4b6b50d0ca19ef44dfe8))
- **lint:** use latest '@viewar/config-eslint' from NPM registry ([89dacbb](https://github.com/viewar/webpack/commit/89dacbb2c44fee5d94b86a47a8522fcd54bab031))

### Features

- karma-webpack with mocha chai spec test ([ac10431](https://github.com/viewar/webpack/commit/ac1043109fe8148457fd1ddfa6ed5499b0f5eebd)), closes [#24](https://github.com/viewar/webpack/issues/24)
- **release:** post releases to slack (semantic-release-slack-bot) ([938b8d7](https://github.com/viewar/webpack/commit/938b8d7085c678677b87d81e1df8ea2999d071b7))

# [1.4.0](https://github.com/viewar/webpack/compare/v1.3.0...v1.4.0) (2019-10-29)

### Bug Fixes

- **lint:** add 'webpack.config.resolve.js' ([ec73b5b](https://github.com/viewar/webpack/commit/ec73b5b2b3a315a6090102f876274c754c1bf607))
- **IDE:** add 'workingDirectories' ([c1483b0](https://github.com/viewar/webpack/commit/c1483b0298031850cc948088a14a5879efd327d1))
- **CI:** fix job names ([22703eb](https://github.com/viewar/webpack/commit/22703eb79f3a96f9da62f0910648e8be29fe768f))
- **CI:** use circleCI ([#12](https://github.com/viewar/webpack/issues/12)) ([ee706d0](https://github.com/viewar/webpack/commit/ee706d0f1c2637f087928da84429977ea258ebd6))
- use named export `remoteConsoleInjector()` ([cb486a1](https://github.com/viewar/webpack/commit/cb486a1362026394b798f97a673bdc760f05e69d))
- **eslint:** use newer version of config "@viewar/config-eslint" ([d6d0223](https://github.com/viewar/webpack/commit/d6d022313cde11dc8339a329b0423d72dca5b857))

### Features

- **polyfill:** add polyfill for native Intl API ([51f911a](https://github.com/viewar/webpack/commit/51f911a3b3f71d10bd99cf748a84ecf8e82915c2))
- **semantic-release:** enable publishing to NPM registry ([635bfa8](https://github.com/viewar/webpack/commit/635bfa83000b3f8f72bb17f2d95bc16afde4b6b3))

# [1.3.0](https://github.com/viewar/webpack/compare/v1.2.0...v1.3.0) (2019-10-29)

### Bug Fixes

- **lint:** add 'webpack.config.resolve.js' ([cf1d9b4](https://github.com/viewar/webpack/commit/cf1d9b4bd6c283958f5611d19ccc2159069c3e0f))
- **IDE:** add 'workingDirectories' ([75a2ab7](https://github.com/viewar/webpack/commit/75a2ab7cdd2d5299095288ab775588651693279d))
- **CI:** fix job names ([b2c0842](https://github.com/viewar/webpack/commit/b2c084282e73d31c590c34800ec02dcf9cd00f20))
- **CI:** use circleCI ([#12](https://github.com/viewar/webpack/issues/12)) ([4d3388a](https://github.com/viewar/webpack/commit/4d3388a3ccd4f1c2235ad6211015f21f32cfd2cc))
- use named export `remoteConsoleInjector()` ([d8c8af7](https://github.com/viewar/webpack/commit/d8c8af7f3902544763cc93a3a4a19a372c544855))
- **eslint:** use newer version of config "@viewar/config-eslint" ([5b27d32](https://github.com/viewar/webpack/commit/5b27d32556809590b98c4fdb898c1f9548899734))

### Features

- **polyfill:** add polyfill for native Intl API ([872cad5](https://github.com/viewar/webpack/commit/872cad5bda713d4ce93fe3452c94609dd6a224b6))

# [1.2.0](https://github.com/viewar/webpack/compare/v1.1.3...v1.2.0) (2019-10-10)

### Bug Fixes

- **CI:** explicitly permit deployment for "next" branch ([79c7d5c](https://github.com/viewar/webpack/commit/79c7d5c1b43a2bdf8aab566ca8ec79ef92dccf6b))

### Features

- **CI:** use TravisCI instead of circleCI ([adbdc8b](https://github.com/viewar/webpack/commit/adbdc8bc3e68d0dcc1a70d2ebfaf719c04969828))

## [1.1.3](https://github.com/DoubleU23/viewar-webpack/compare/v1.1.2...v1.1.3) (2019-09-24)

### Bug Fixes

- **remoteConsole:** fix import as default ([4eeb46b](https://github.com/DoubleU23/viewar-webpack/commit/4eeb46b))

## [1.1.2](https://github.com/DoubleU23/viewar-webpack/compare/v1.1.1...v1.1.2) (2019-09-21)

### Bug Fixes

- **remoteConsole:** export injector seperately for client usage ([029a536](https://github.com/DoubleU23/viewar-webpack/commit/029a536))
- **test:** run clean before test ([7ac0650](https://github.com/DoubleU23/viewar-webpack/commit/7ac0650))

## [1.1.1](https://github.com/DoubleU23/viewar-webpack/compare/v1.1.0...v1.1.1) (2019-09-20)

### Bug Fixes

- **dotenv:** remove requirement and dep ([09d410a](https://github.com/DoubleU23/viewar-webpack/commit/09d410a))

# [1.1.0](https://github.com/DoubleU23/viewar-webpack/compare/v1.0.0...v1.1.0) (2019-09-20)

### Bug Fixes

- /configs -> /env + format ([5d1cd16](https://github.com/DoubleU23/viewar-webpack/commit/5d1cd16))
- **config:** add additional webpack configs and use updated versions ([40d3f89](https://github.com/DoubleU23/viewar-webpack/commit/40d3f89))
- **viewar-core:** correct viewar-core.js import path ([85b25b7](https://github.com/DoubleU23/viewar-webpack/commit/85b25b7))
- **build:** fix `errorOnUsedPort()` ([bca08e6](https://github.com/DoubleU23/viewar-webpack/commit/bca08e6))
- **css-loader:** fix option scheme ([3a3455e](https://github.com/DoubleU23/viewar-webpack/commit/3a3455e))
- **deps:** move "express-useragent" to deps (!dev) ([6e0132a](https://github.com/DoubleU23/viewar-webpack/commit/6e0132a))
- **semantic-release:** release on master ([e10707f](https://github.com/DoubleU23/viewar-webpack/commit/e10707f))
- **cssLoader:** use v3 config scheme (fix version to v3) ([e79e55d](https://github.com/DoubleU23/viewar-webpack/commit/e79e55d))

### Features

- **remoteConsole:** `import {remoteConsoleInjector} from '@viewar/webpack/remoteConsole` ([db50df6](https://github.com/DoubleU23/viewar-webpack/commit/db50df6))
- add 'lint-staged' ([3ea0890](https://github.com/DoubleU23/viewar-webpack/commit/3ea0890))
- add circleCI config ([7662655](https://github.com/DoubleU23/viewar-webpack/commit/7662655))
- deliver viewar-core.js per webpack dev server (check UA) ([33548e5](https://github.com/DoubleU23/viewar-webpack/commit/33548e5))
- **semantic-release:** release to GITHUB and push to BB ([b039af6](https://github.com/DoubleU23/viewar-webpack/commit/b039af6))
- **eslint-import-resolver:** resolve WEBPACK_PATH per dotenv ([46b8eef](https://github.com/DoubleU23/viewar-webpack/commit/46b8eef))

# 1.0.0 (2019-09-02)

🎉 _initial commit_
