const path = require("path");

module.exports = {
  mode: "production", // by default it's always production mode (development, production , testing)
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
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
