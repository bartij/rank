var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
    devtool: 'inline-source-map',
    entry: [
    'webpack-hot-middleware/client',
    './client/app/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                exclude: /node_modules/,
                loader : 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }
        ]
    }
};

module.exports = config;