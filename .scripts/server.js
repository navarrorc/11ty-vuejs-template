const browserSync = require("browser-sync").create();
const path = require("path");
const statsOptions = require("./_options.js");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

let webpackConfig = require("../webpack.config.js")(process.env.NODE_ENV);
const bundler = webpack(webpackConfig);

function resolve(dir) {
  return path.resolve(__dirname, dir); // creates an absolute path
}

// Run Browsersync and use middleware for Hot Module Replacement
const middleware = [
  webpackDevMiddleware(bundler, {
    // IMPORTANT: dev middleware can't access config, so we should
    // provide publicPath by ourselves
    publicPath: webpackConfig.output.publicPath,
    stats: statsOptions
    // for other settings:
    // @see https://webpack.js.org/guides/development/#webpack-dev-middleware
  }),
  webpackHotMiddleware(bundler) // to enable HMR
];

let options = {
  host: "localhost",
  port: 8080,
  notify: true,
  open: false,
  server: {
    baseDir: resolve("../11ty/_site"),
    middleware
  },
  ui: {
    port: 8081
  },
  // https: {
  //   pfx: "./ssl/localhost-spo-dev.pfx",
  //   passphrase: "spodev"
  // },
  ghostMode: false,
  files: ["./11ty/_site/*.html"]
};

browserSync.init(options);
