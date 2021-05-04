const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx', // entry file to bundler
    devtool: 'inline-source-map', // tool to create dourc-map in browser
    devServer: {
        // contentBase: './dist',
        open: true, // open new tab when webpack dev server start
    },
    plugins: [
        // new PrettierPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // add template to bundle
            favicon: './public/favicon.svg',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{ loader: 'file-loader' }],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash:12].js', // create name bundle file
        path: path.resolve(__dirname, 'dist'), // add path bundle files
        clean: true, // clean before build
    },
}
