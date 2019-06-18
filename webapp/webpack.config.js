const path = require("path");

module.exports = {
  entry: ["whatwg-fetch", "./app.tsx"],
  output: {
    filename: "code.js",
    path: path.join(__dirname, "../WebService/PokerService/wwwroot/"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, enforce: "pre", loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },

  plugins: [],

  externals: {},
};
