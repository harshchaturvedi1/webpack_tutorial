const path = require("path");

module.exports = {
  mode: "production", // by default it's always production mode (development, production , testing)
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3500,
  },
};
