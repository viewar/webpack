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
