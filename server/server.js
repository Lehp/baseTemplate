"use strict";
const express = require("express");
const port = 3000;
const app = express();
app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.get("/main.js", function (req, res) {
    res.sendFile(__dirname + "/dist/main.js");
});
app.get("/main-es5.js", function (req, res) {
    res.sendFile(__dirname + "/dist/main-es5.js");
});
app.get("/main-es2015.js", function (req, res) {
    res.sendFile(__dirname + "/dist/main-es2015.js");
});
app.get("/runtime-es2015.js", function (req, res) {
    res.sendFile(__dirname + "/dist/runtime-es2015.js");
});
app.get("/polyfills-es2015.js", function (req, res) {
    res.sendFile(__dirname + "/dist/polyfills-es2015.js");
});
app.get("/polyfills.js", function (req, res) {
    res.sendFile(__dirname + "/dist/polyfills.js");
});
app.get("/styles.js", function (req, res) {
    res.sendFile(__dirname + "/dist/styles.js");
});
app.get("/styles-es2015.js", function (req, res) {
    res.sendFile(__dirname + "/dist/styles-es2015.js");
});
app.get("/vendor.js", function (req, res) {
    res.sendFile(__dirname + "/dist/vendor.js");
});
app.get("/vendor-es2015.js", function (req, res) {
    res.sendFile(__dirname + "/dist/vendor-es2015.js");
});
app.get("/favicon.ico", function (req, res) {
    res.sendFile(__dirname + "/dist/favicon.ico");
});
app.get("/runtime.js", function (req, res) {
    res.sendFile(__dirname + "/dist/runtime.js");
});
app.get("/**/*", function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});
//# sourceMappingURL=server.js.map