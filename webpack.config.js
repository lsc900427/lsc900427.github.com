const path = require('path');

module.exports = {
    entry: path.resolve('src/main.js'),
    output: {
        path: path.resolve('Leesang'),
        filename: 'cheol.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            enforce: 'pre'
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },{
            test: /\.hbs$/,
            loader: 'handlebars-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/
        }
    ]
    },
    plugins: [],
    devServer: {
        contentBase: path.join(__dirname, "Leesang"),
        compress: true,
        port: 9000
    }
}
