"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: path.resolve("./app.js"),
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(__dirname, "layout.html"),
			title: "Example"
		})
	],
	devServer: {
		hot: true
	},
	output: {
		path: __dirname + "/dist"
	}
};
