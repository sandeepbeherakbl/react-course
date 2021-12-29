const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.ressolve(__dirname ,'new'),
        filename: 'bundle.js',
    },
};