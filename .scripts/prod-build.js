const statsOptions = require("./_options.js");
const webpack = require("webpack");
let webpackConfig = require("../webpack.config.js")(process.env.NODE_ENV);

function onBuild() {
  return function(err, stats) {
    if (err) {
      // gutil.log("Error", err);
      console.log("Error", err);
    } else {
      // see: https://webpack.js.org/configuration/stats/
      // gutil.log("onBuild", stats.toString(statsOptions));
      console.log("onBuild", stats.toString(statsOptions));
    }
  };
}

webpack(webpackConfig, function(err, stats) {
  onBuild()(err, stats);
});
