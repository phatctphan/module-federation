const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "auto",
  },
  resolve: {
    extensions: [".*", ".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    port: 3003,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ModuleFederationPlugin({
      name: "Sample2",
      filename: "remote-entry.js",
      exposes: {
        "./Button": "./src/components/Button",
      },
    }),
  ],
};
