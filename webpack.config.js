const path = require('path');
const webpack = require('webpack');  //to access built-in plugins

module.exports = {
    entry : './example/index.js',
    output: {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test  : /\.js$/, exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]

            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $              : 'jquery',
            jQuery         : 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
}
