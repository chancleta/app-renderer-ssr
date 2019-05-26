const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  // Inform webpack that we are building a module for nodejs rather than the browser
  target: "node",
  // Tell webpack the root/entry file of our server application
  node: {
    __dirname: false,
    __filename: false
  },
  entry: "./src/server/index.js",
  mode: "development",
  // Output tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./templates/index.ejs"),
      filename: "index.html"
    })
  ],
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              { targets: { browsers: ["last 2 versions"] } }
            ]
          ]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")],
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
};

module.exports = config;
