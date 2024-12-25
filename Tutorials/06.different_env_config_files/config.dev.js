const path = require("path");

module.exports = {
  mode: "development", // by default it's always production mode (development, production , testing)
  entry: "./src/App.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3500,
  },
  // loader
  // similar for images and css some small changes
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //loader
};
