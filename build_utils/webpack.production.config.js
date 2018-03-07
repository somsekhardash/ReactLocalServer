const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const config = {
    output: {
        path: path.join(__dirname, "../", "distP"),
        filename: '[name].js',
        publicPath: "/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress: {
        //         dead_code: true,
        //         warnings: false
        //     },
        //     comments: false
        // }),
        new ExtractTextPlugin({ filename: '[name].min.css', disable: false, allChunks: true }),
        new CleanWebpackPlugin(["distP"], { root: path.join(__dirname, "../") }),
        new workboxPlugin({
            globPatterns: ['**/*.{js,css,html.json}'],
            swDest: path.join(__dirname, "../", "distP/service_worker.js"),
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [{
                urlPattern: /^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/,
                handler: 'networkFirst'
            }]
        })
    ]
};
module.exports = config;