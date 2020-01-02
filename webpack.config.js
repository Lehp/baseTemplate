const htmlWebpackPlugin = require("html-webpack-plugin");
const _ = require("underscore");

const glob = require("glob");

module.exports = {
    entry:  {
        app: _.union(
            glob.sync(`./src/**/*.ts`, { nosort: true }),
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
        template: "./src/index/index.component.pug"
      })
    ],
    module: {
        rules: [
            {test: /\.ts$/, use: "ts-loader"},
            {test: /\.css$/, use: "css-loader"},
            {test: /\.pug$/, use: "pug-loader"},
            {test: /\.styl$/, use: "style-loader!css-loader!stylus-loader"},
            {test: /\.html$/, use: "raw-loader"},
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
};
