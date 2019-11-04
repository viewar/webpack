require('@babel/polyfill')

/**
 * catch errors while rendering
 * otherwise they will be supressed by webpack(-dev-server)
 *
 * needed for remoteConsole!
 * TODO: refactor: add error boundaries
 */
window.addEventListener('unhandledrejection', (event) => {
  console.error(event.reason)
})
window.addEventListener('error', (event) => console.error(event.error))

/**
 * @description Polyfill for "native Intl API"
 *  PluralRules for IE11- & Safari 12-
 *  RelativeTimeFormat for IE11-, Edge, Safari 13-
 *
 * @used by 'react-intl' and similar
 */
if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill')
  require('@formatjs/intl-pluralrules/dist/locale-data/de')
  require('@formatjs/intl-pluralrules/dist/locale-data/en')
  require('@formatjs/intl-pluralrules/dist/locale-data/sr')
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/de')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en')
  require('@formatjs/intl-relativetimeformat/dist/locale-data/sr')
}
