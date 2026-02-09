module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
