const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/component/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,"../","dist")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              }
        ]
    },
    
    plugins:[ new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"dev"'
        }
      }),
      new ExtractTextPlugin("styles.css")
    ],
    externals: {
        pathName: JSON.stringify(require(path.join(__dirname,"../", "pathName.js")))
    }
};

module.exports = config;