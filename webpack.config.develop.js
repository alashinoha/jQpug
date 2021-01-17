const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
    mode: 'development',
    output: {
        path: __dirname +'/dist',
        filename: 'jqpug.js',
    },
});

module.exports = config;
