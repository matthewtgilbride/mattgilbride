// https://github.com/duncanleung/gatsby-typescript-emotion-storybook/blob/master/.storybook/webpack.config.js
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        // ['react-app', { flow: false, typescript: true }],
        // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
        // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
        require.resolve('@emotion/babel-preset-css-prop'),
      ],
    },
  });

  return config
}
