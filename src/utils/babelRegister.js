require('@babel/register', {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: { esmodules: true },
      },
    ],
  ],
})
