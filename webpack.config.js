const path = require('path');
console.log(path);
const H = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        filename:'main.js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.html|htm)$/,
                use: ['html-withimg-loader']
            },
            {
                test: /(\.jpg|gif|png|jpeg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath:'images/',
                        filename: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new H({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
}