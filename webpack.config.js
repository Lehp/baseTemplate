const htmlWebpackPlugin = require("html-webpack-plugin");
const _ = require("underscore");

const glob = require("glob");

module.exports = {
    entry:  {
        app: _.union(
            glob.sync(`./src/app/**/*.ts`, { nosort: true }),
        )
    },
    output: {
        path: __dirname + "/server/dist",
        filename: "app.bundle.js",
    },
    resolve: {
        extensions: [".js", ".ts", ".html", ".pug"]
    },
    plugins: [
        new htmlWebpackPlugin({
        angularAppName: "lolTricks",
        title: "lolTricks",
        template: "./client/lolTricks/views/index.pug"
    }),


    ],
    module: {
        rules: [
            {test: /\.ts$/, loaders: "ts-loader"},
            {test: /\.css$/, loaders: "css--loader"},
            {test: /\.pug$/, loaders: "pug-loader"},
            {test: /\.styl$/, loaders: "style-loader!css-loader!stylus-loader"},
            {test: /\.html$/, use: "raw-loader"}
        ]
    }
};
