const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

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
    port: 3005,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|jsx|jsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ModuleFederationPlugin({
      name: "Sample4",
      filename: "remote-entry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
};
