const TerserPlugin = require('terser-webpack-plugin');

const config = require('./webpack.config');

module.exports = {
    ...config,
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                mangle: true,
                output: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    },
};
