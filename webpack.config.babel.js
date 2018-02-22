
const config = require("./build_utils/webpack.common");

const nodeConfig = require("./build_utils/webpack.node.config");
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");

const prod = () => {   
    const tConfig = require(`./build_utils/webpack.${process.env.NODE_ENV}.config.js`);
    return webpackMerge(config,tConfig) ;
}

module.exports = [nodeConfig,prod];
