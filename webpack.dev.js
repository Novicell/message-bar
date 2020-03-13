const config = require('./webpack.config');

module.exports = {
    ...config,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
     contentBase: './dist',
    },
};
