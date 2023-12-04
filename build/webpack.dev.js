const { merge } = require('webpack-merge');
const base = require('./webpack.common');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },
});