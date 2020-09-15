let path = require('path');

let config = {
    entry: './src/local-storage-manage.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'ls-manage.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    }
};

module.exports = config;