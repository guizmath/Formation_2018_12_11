const HtmlWebpackPlugin = require('html-webpack-plugin')

// npm i webpack-dev-server babel-loader @babel/core @babel/preset-env -D

module.exports = function(_, { mode }) {
    return {
        devtool: mode === 'development' ? 'source-map' : false,
        entry: './src/index.js',
        output: {
            filename:
                mode === 'production' ? 'app.[chunkHash].min.js' : 'app.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
    }
}
