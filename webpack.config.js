// import { Configuration } from 'webpack'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * @type {Configuration}
*/

module.exports = {
    mode: 'production',

    entry: './src/index.ts',
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        environment: {
            arrowFunction: false,
            const: false,
        }
    },

    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env"]
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devtool: 'cheap-module-eval-source-map',
    
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 5000,
        compress: true,
        hot: true,
        clientLogLevel: 'none', //  不显示启动服务器日志
        quiet: true,    //  只要启动信息
        overlay: false, //出错不要全屏提示
    }
}