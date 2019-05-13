const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we are building a module for nodejs rather than the browser
  target: 'node',
  // Tell webpack the root/entry file of our server application
  entry: './src/server/index.js',
  // Output tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);