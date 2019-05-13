const path = require('path');

module.exports = {
  // Inform webpack to run babel in every file it runs thru
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react', ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};