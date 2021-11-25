const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
console.log(__dirname, 'dirname');
module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dist")
    },
    module: {
        // 指定不解析的模块，比如第三方库
        // noParse: /vue|lodash/,
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                include: resolve("src/styles")
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                include: resolve("src/styles")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerHost: "127.0.0.1:3000"
        })
    ],
    resolve: {
        // 制定webpack解析模块目录
        module: ["node_modules"]
    }
}
