const merge = require('webpack-merge');
const fs = require('fs');
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const IS_PRODUCTION = process.env.NODE_ENV ? true : false;
const nodeBuildPath = './../distSSR/';
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entryForServerJS = {
    'common/index': path.resolve(__dirname, './../server/node/server.js')
}

const componentFolder = `${process.cwd()}/src/component/ssrMolecule/`;
const entryForServerComponents = {};

fs.readdirSync(componentFolder).forEach(folder => {
    entryForServerComponents[`components/${ folder }/index`] = [`${ componentFolder }/${ folder }/index.js`];
});
const entries = Object.assign(entryForServerJS, entryForServerComponents);

let nodeConfig = {
    entry: entries,
    output: {
        path: path.join(__dirname, nodeBuildPath),
        filename: IS_PRODUCTION ? '[name].min.js' : '[name].js',
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css', 'png']
    },
    node: {
        __filename: false,
        __dirname: false
    },
    plugins: [
        new ExtractTextPlugin({ filename: './[name].css', disable: false, allChunks: true }),
        new CleanWebpackPlugin(["distSSR"], { root: path.join(__dirname, "../") })
    ],
    externals: {
        pathName: JSON.stringify(require(path.join(__dirname, "../", "pathName.js")))
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ["env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            },
                            "modules": false
                        }]
                    ]

                }
            }]
        }]
    }
};
module.exports = nodeConfig;