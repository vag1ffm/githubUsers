let path = require('path');

module.exports = {
    distDir: "build",
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: 'ts-loader'
        }]
    }
}
module.exports = {
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: 'ts-loader'
        }]

    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}

