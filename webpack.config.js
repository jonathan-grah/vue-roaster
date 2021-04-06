var path = require("path");

module.exports = {
  entry: {
    toasters: "./src/index.js",
    example: "./example/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "Toast",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/i, use: [ "style-loader", "css-loader" ] },
    ]
  }
}