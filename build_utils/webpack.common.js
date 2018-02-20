const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const fs = require('fs');
const entryForClientComponents = {};
const componentFolder = `${process.cwd()}/src/component/organism/`;
const workboxPlugin = require('workbox-webpack-plugin');
fs.readdirSync(componentFolder).forEach(folder => {
    entryForClientComponents[`global/components/${folder}/index`] = [`${componentFolder}/${folder}/index.js`];
});

const htmlTmplReport = require('eslint/lib/formatters/html');
let entryForClientBundle = {
    'vendor': ['react', 'react-dom', 'prop-types', 'react-redux', 'redux'],
    'app': './src/component/index.js',
    "sw": './src/index.js'
}
const entries = Object.assign(entryForClientComponents,entryForClientBundle);
const config = {
    entry: entries,
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

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new workboxPlugin({
            // globDirectory: './distProd/',
            globPatterns: ['**/*.{js,css,html.json}'],
            swDest: path.join(__dirname, "../", "distProd/service_worker.js"),
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [{
                urlPattern: /^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/,
                handler: 'networkFirst'
            }]           
        })
    ],

    externals: {
        pathName: JSON.stringify(require(path.join(__dirname, "../", "pathName.js")))
    }
};

module.exports = config;