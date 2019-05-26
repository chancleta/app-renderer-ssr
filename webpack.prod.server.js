const path = require("path");
const merge = require("webpack-merge");
const commonServer = require("./webpack.config.server.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const config = merge(commonServer, {
  // Inform webpack that we are building a module for nodejs rather than the browser
  target: "node",

  // Tell webpack the root/entry file of our server application
  node: {
    __dirname: false,
    __filename: false
  },
  entry: "./src/server/index.js",
  mode: "production",
  // Output tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  }
});

module.exports = config;
