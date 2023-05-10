module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
    [
      '@babel/preset-react',
      {
        importSource: '@welldone-software/why-did-you-render',
        runtime: 'automatic',
        development: true,
      },
    ],
  ],
  plugins: ['react-native-reanimated/plugin'],
};
