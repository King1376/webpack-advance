const {merge} = require("webpack-merge")
const common = require("./webpack.common")
const development = {
    mode: 'development'
}
module.exports = merge(common, development)
