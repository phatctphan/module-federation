const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "auto",
  },
  resolve: {
    extensions: [".*", ".ts", ".js"],
  },
  devServer: {
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ModuleFederationPlugin({
      name: "Sample1",
      filename: "remote-entry.js",
      exposes: {
        "./index": "./src/index",
      },
    }),
  ],
};
