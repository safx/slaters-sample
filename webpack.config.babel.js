import { resolve } from 'path'
import Webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        bundle: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8088',
            'webpack/hot/only-dev-server',
            './index.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8088
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [ "babel-loader" ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules' ],
            }
        ],
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin(),
    ]
};
