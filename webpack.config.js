const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  target: "web",
  entry: ["./web/src/main.js", "./modules/encryption.js"],
  output: {
    path: path.resolve(__dirname, "web"),
    filename: "js/bundle.js",
  },
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
