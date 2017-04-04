const path = require('path');
const rules = require('./rules');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: [
        './demo/entry.js'
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
        path: path.resolve(__dirname, '../demo/lib'),
        filename: 'bundle.js',
        sourceMapFilename: 'debugging/[file].map',
        publicPath: 'http://localhost:8080/demo/lib/',
        crossOriginLoading: 'use-credentials'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    },
    module: {
        rules: rules
    },
    devtool: 'inline-source-map'
};
