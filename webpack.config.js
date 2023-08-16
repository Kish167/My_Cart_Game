const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        },
        {
        test: /\.(woft|woft2|eot|ttf|otf)$/i,
        type: "asset/resource",
    },
    ],
    },
    plugins: [
        new CopyPlugin({
        patterns: [{ from: "static", to: "static"}],
        }),
        new HtmlWebpackPlugin({
        template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
], 
optimization: {
    minimizer: ['...',new CssMinimizerPlugin(),],
},
devtool:
process.env.NODE_ENV === "production" ? false : "source-map",

};