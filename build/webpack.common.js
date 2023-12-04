const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.ts(x)?$/i,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                exclude: /node_modules/,
            }
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dawn',
            template: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }
}