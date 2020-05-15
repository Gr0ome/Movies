// eslint-disable-next-line no-var
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
};