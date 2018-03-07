const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = {
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "../", "distDev"),
        filename: '[name].bundle.js',
        chunkFilename: "[id].bundle.js"
    },
    plugins: [ 
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new ExtractTextPlugin({ filename: '[name].min.css', disable: false, allChunks: true }),
        new CleanWebpackPlugin(["distDev"], { root: path.join(__dirname, "../") })
    ]
};
module.exports = config;