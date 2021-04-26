const path = require('path');
module.exports = {
    outputDir: path.resolve(__dirname, '/backend/server/public'),
    devServer: {
        proxy: {
            '/subscribe': {
                target: 'http://localhost:5000'
            }

        }
    }
}