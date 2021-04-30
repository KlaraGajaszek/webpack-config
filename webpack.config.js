const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // entry file to bundler
  devtool: 'inline-source-map', // tool to create dourc-map in browser
  devServer: {
    // contentBase: './dist',
    open: true, // open new tab when webpack dev server start
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // add template to bundle
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
