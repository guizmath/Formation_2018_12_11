const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// npm i webpack-dev-server babel-loader @babel/core @babel/preset-env -D

module.exports = function(_, { mode }) {
    return {
        devtool: mode === 'development' ? 'source-map' : false,
        resolve: {
            extensions: ['.ts', '.js'],
        },
        entry: './src/index.ts',
        output: {
            filename:
                mode === 'production' ? 'app.[chunkHash].min.js' : 'app.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename:
                    mode === 'development'
                        ? '[name].css'
                        : '[name].[chunkHash].css',
                chunkFilename:
                    mode === 'development'
                        ? '[id].css'
                        : '[id].[chunkHash].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'awesome-typescript-loader',
                    },
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-syntax-dynamic-import'],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        mode === 'development'
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
    }
}
