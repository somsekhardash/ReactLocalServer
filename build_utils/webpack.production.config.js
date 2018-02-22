const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = {
    output: {
        path: path.join(__dirname, "../", "distProd"),
        filename: '[name].js',
        publicPath: "/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                dead_code: true,
                warnings: false
            },
            comments: false
        }),
        new ExtractTextPlugin({ filename: '[name].min.css', disable: false, allChunks: true }),
        new CleanWebpackPlugin(["distProd"], { root: path.join(__dirname, "../") })
    ]
};
module.exports = config;