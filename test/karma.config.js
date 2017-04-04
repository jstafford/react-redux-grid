const path = require('path');
const rules = require('../webpack/rules');

const BROWSERS = process.argv && process.argv.indexOf('--browser') !== -1
    ? ['jsdom', 'Chrome']
    : ['jsdom'];

const COVERAGE = process.argv && process.argv.indexOf('--coverage') !== -1;

const SINGLE_RUN = process.argv
    && process.argv.indexOf('--no-single-run') === -1;

const REPORTERS = COVERAGE
    ? ['spec', 'coverage-istanbul']
    : ['spec'];

const ISTANBUL_RULE = {
    test: /\.js$|\.jsx$/,
    include: path.resolve('../src/'),
    loader: 'istanbul-instrumenter-loader'
};

module.exports = function exports(config) {
    if (COVERAGE) {
        rules.push(ISTANBUL_RULE);
    }
    config.set({
        basePath: './',
        browsers: BROWSERS,
        files: [
            './../webpack/webpack.test.js'
        ],
        client: {
            captureConsole: false
        },
        frameworks: ['chai', 'mocha', 'es6-shim', 'sinon-chai'],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-coverage-istanbul-reporter',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-es6-shim',
            'karma-webpack',
            'karma-babel-preprocessor',
            'karma-jsdom-launcher',
            'karma-sourcemap-loader',
            'karma-sinon-chai',
            'karma-spec-reporter'
        ],

        preprocessors: {
            './../webpack/webpack.test.js': ['babel', 'webpack', 'sourcemap']
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        reporters: REPORTERS,
        specReporter: {
            maxLogLines: 20,
            suppressErrorSummary: false,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: false
        },
        singleRun: SINGLE_RUN,
        webpack: {
            resolve: {
                extensions: ['.js', '.jsx', '.styl']
            },
            module: {
                rules: rules
            },
            externals: {
                cheerio: 'window',
                window: 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            target: 'web',
            node: {
                fs: 'empty'
            },
            devServer: {
                quiet: false
            }
        },
        webpackMiddleware: {
            noInfo: true,
            quiet: true
        },
        coverageIstanbulReporter: {
            reports: ['text', 'lcovonly'],
            dir: './coverage',
            fixWebpackSourcePaths: true,
            'report-options': {
                text: {
                    maxCols: 80
                }
            }
        }
    });
};
