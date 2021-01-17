const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
    mode: 'production',
    output: {
        path: __dirname +'/dist',
        filename: 'jqpug.min.js',
    },
});

module.exports = config;
