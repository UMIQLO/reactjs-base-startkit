const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const buildPath = path.resolve(__dirname, 'build');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        //path: buildPath,
        //publicPath: "/build/",
    },
    //devtool: 'inline-source-map',
    devServer: {
        overlay: true,
        contentBase: './',
        hot: true, // Live-reload
        inline: true,
        port: 21314, // Port Number
        host: 'localhost' // Change to '0.0.0.0' for external facing server
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "src/assets/template/index.html",
            title: "webpack 4 - ReactJs Base StartKit",
            favicon: "src/assets/template/favicon.ico",
        })
    ],
};

module.exports = config;

