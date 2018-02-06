
const config = require("./build_utils/webpack.common");
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");

module.exports = () => {   
    const tConfig = require(`./build_utils/webpack.${process.env.NODE_ENV}.config.js`);
    return webpackMerge(config,tConfig) ;
}
