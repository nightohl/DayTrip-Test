/* eslint-disable no-dupe-keys */

const pathPlugin = [
  [
    'module-resolver',
    {
      root: ['./'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '*': './src',
        '@components': './src/components',
        '@navigators': './src/navigators',
        '@screens': './src/screens',
        '@assets': './src/assets',
        '@lib': './src/lib',
        '@recoil': './src/recoil',
        '@storage': './src/storage',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...pathPlugin],
};
