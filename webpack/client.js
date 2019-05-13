const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

const config = {
  // Tell webpack the root/entry file of our server application
  entry: './src/client/root.js',
  // Output tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
  },
};

module.exports = merge(baseConfig, config);