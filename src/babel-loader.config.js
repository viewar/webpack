const babelLoader = [{
  loader:  'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules:     'auto',
          useBuiltIns: 'entry', // uses utils/polyfills
          corejs:      3,
          targets:     {
            node:      'current',
            esmodules: true,
            // when specifying the esmodules target, browsers targets will be ignored.
            // browsers:  [
            //   'last 2 versions',
            //   '> 1%',
            //   'IE 10',
            // ],
          },
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-export-default-from',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-react-constant-elements',
      'transform-inline-environment-variables',
    ],
  },
}, { loader: 'source-map-loader' }]

module.exports = babelLoader
