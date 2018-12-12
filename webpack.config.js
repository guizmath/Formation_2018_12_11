const HtmlWebpackPlugin = require("html-webpack-plugin");

// npm i webpack-dev-server babel-loader @babel/core @babel/preset-env -D

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
