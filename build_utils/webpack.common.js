const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const fs = require('fs');
// const entryForClientComponents = {};
// const componentFolder = `${process.cwd()}/src/component/organism/`;

// fs.readdirSync(componentFolder).forEach(folder => {
//     entryForClientComponents[`global/components/${folder}/index`] = [`${componentFolder}/${folder}/index.js`];
// });

const htmlTmplReport = require('eslint/lib/formatters/html');
let entryForClientBundle = {
    'vendor': ['react', 'react-dom', 'prop-types', 'react-redux', 'redux'],
    'app': './src/component/index.js'
}
const entries = Object.assign(entryForClientBundle);
const config = {
    entry: entries,
    module: {
        rules: [
            //{
            //     enforce: 'pre',
            //     test: /.js?$/,
            //     exclude: /node_modules|src\/app\/vendor/,
            //     use: [{
            //         loader: 'eslint-loader',
            //         options: {
            //             ignorePath: '.eslintignore',
            //             outputReport: {
            //                 filePath: '../reports/eslint_react.html',
            //                 formatter: htmlTmplReport
            //             }
            //         }
            //     }]
            //},
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

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new CleanWebpackPlugin(["dist"], { root: path.join(__dirname, "../") })
    ],
    externals: {
        pathName: JSON.stringify(require(path.join(__dirname, "../", "pathName.js")))
    }
};

module.exports = config;