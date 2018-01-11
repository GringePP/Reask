/**
 * Created by Mindjet on 2018/1/6.
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        main: path.join(__dirname, 'src', 'index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: path.join(__dirname, 'res')
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build'])
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
};

module.exports = config;