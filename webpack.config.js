var path = require("path")

module.exports = {
  entry: "./src/toasters.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "toasters.js",
    library: "toasters",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}