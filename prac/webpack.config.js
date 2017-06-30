const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: path.resolve('src/main.js'),
    output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js/,
            loader:'eslint-loader',
            exclude: /node_modules/,
            enforce: 'pre'  //babel-loader가 돌기 전에 린트를 먼저 돌린다
        },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.hbs$/,
            loader: 'handlebars-loader'

        },
        {
            test: /\.css$/,
            loader: 'css-loader'
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }]
  },
  plugins: [],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};