module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: 'commonjs',
        corejs: {
          version: 3,
        },
      },
    ],
  ],
}
