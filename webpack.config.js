const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugins({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: "./src/styles/style.css", to: "" }],
    }),
  ],
};
