const path = require('path');
const webpack = require('webpack');
const rules = require('./rules');

module.exports = {
    entry: [
        './demo/entry.js'
    ],
    output: {
        path: path.resolve(__dirname, '../demo/lib'),
        filename: 'bundle.js',
        publicPath: 'lib/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        rules: rules
    },
    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};
