const path = require('path');

module.exports = {
    mode: 'production',
    entry: ["./web/src/main.js", "./modules/encryption.js"],
    output: {
        path: path.resolve(__dirname, "web"),
        filename: 'js/bundle.js'
    }
};