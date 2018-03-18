const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs');
const entryForClientComponents = {};
const componentFolder = `${process.cwd()}/src/component/organism/`;
const workboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
fs.readdirSync(componentFolder).forEach(folder => {
    entryForClientComponents[`global/components/${folder}/index`] = [`${componentFolder}/${folder}/index.js`];
});

const htmlTmplReport = require('eslint/lib/formatters/html');
let entryForClientBundle = {
    'vendor': ['react', 'react-dom', 'prop-types', 'react-redux', 'redux'],
    'app': './src/component/index.js',
    "sw": './src/index.js'
}
const entries = Object.assign(entryForClientComponents, entryForClientBundle);
const config = {
    entry: entries,
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css', 'png']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    }]
                })
            },

            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {                        
                        "presets": ["react", "es2015","stage-0"],
                        "env": {
                            "es6": true
                        },
                        "plugins": [
                            "transform-decorators-legacy",
                            "transform-class-properties"
                        ] 
                    }
                }]
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
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor_chunk.js",
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
    ],

    externals: {
        pathName: JSON.stringify(require(path.join(__dirname, "../", "pathName.js")))
    }
};

module.exports = config;