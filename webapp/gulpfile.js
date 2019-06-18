const { task, parallel } = require("gulp");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack");
const log = require("fancy-log");

const webPackCallback = (_error, stats, callback) => {
  const message = stats.toString();
  if (!stats.hasErrors()) {
    log(message);
    callback();
  } else {
    callback(message);
  }
};

const jsDebug = done => {
  webpack(
    {
      ...webpackConfig,
      devtool: "inline-source-map",
      mode: "development",
    },
    (error, stats) => webPackCallback(error, stats, done)
  );
};

task("default", parallel(jsDebug));
