const path = require("path/posix");

module.exports = {
    entry: "./src/index.js",
    output : {
        path: path.join(__dirname, "new_pack"),
        filename: "bundle.js",
    },
    mode: "development",
};