
const config = require("./build_utils/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
    const tConfig = require(`./build_utils/webpack.${env}.config.js`);
    return webpackMerge(config,tConfig) ;
}