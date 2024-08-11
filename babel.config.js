module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
        'module-resolver',
        {
            root: ['.'],
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
                '@constants': './src/constants',
                '@components': './src/components',
                '@screens': './src/screens',
                '@assets': './src/assets',
                '@theme': './src/theme',
                '@localization': './src/localization',
                '@helpers': './src/helpers',
                '@type': './src/types',
                '@utils': './src/utils',
                '@': './src',
            },
        },
    ],
    'react-native-reanimated/plugin',
],
};
