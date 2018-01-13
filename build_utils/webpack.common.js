const path = require("path");
const webpack = require("webpack");
const htmlWebpack = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "../" , 'dist');
var APP_DIR = path.resolve(__dirname,"../", 'src');

const config = {
    entry: "./src/index.js",
    output: {
        filename: "[chunkhash].bundle.js",
        path: path.join(__dirname,"../","dist")
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new htmlWebpack(),
        new WebpackCleanupPlugin()
    ]
};

module.exports = config;