const path = require('path');
const rules = require('./rules');

const ESLINT_RULE = [{
  test: /\.jsx?$/, // both .js and .jsx
  loader: 'eslint-loader',
  include: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'demo')
  ],
  enforce: 'pre',
  options: {
    configFile: '.eslintrc.js',
    emitError: true,
    failOnError: true,
    failOnWarning: false
  },
}];

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
        rules: ESLINT_RULE.concat(rules)
    },
    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    },
    devtool: 'inline-source-map'
};
