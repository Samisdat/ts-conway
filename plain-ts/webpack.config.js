const path = require('path');

const srcPath = (subdir) => {
    return path.join(__dirname, "src", subdir);
}

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

var DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new DashboardPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                title: 'Conways game of live',
                template: 'src/index.html'
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        alias: {
            '@Conway': path.resolve(__dirname, 'typescript/')
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
