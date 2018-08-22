// webpack.config.update.js
const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");

module.exports = function update(webpackConfig) {
  webpackConfig.entry["com.muxistudio.card"] = [
    path.resolve(__dirname, "./src/index.js")
  ];
  console.log("current env", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    webpackConfig.plugins[7].options.include = /\.js$/;
    webpackConfig.plugins.push(
      new webpack.BannerPlugin({
        banner: `com.muxistudio.card, version ${
          pkg.version
        }, built time: ${Date()}`
      })
    );
  }

  return webpackConfig;
};
