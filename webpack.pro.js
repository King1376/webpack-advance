const {merge} = require("webpack-merge")
const common = require("./webpack.common")
const production = {
    mode: 'production'
}
module.exports = merge(common, production)
