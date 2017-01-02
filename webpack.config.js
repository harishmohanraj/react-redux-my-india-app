var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.min.css', {
            allChunks: true
        }),
         new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    }
};