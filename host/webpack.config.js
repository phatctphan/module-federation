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
    port: 3001,
    historyApiFallback: {
      index: "/",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
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
      name: "host",
      // Remote sites expose JS libraries or UI components
      remotes: {
        Sample1: "Sample1@http://localhost:3002/remote-entry.js",
        Sample2: "Sample2@http://localhost:3003/remote-entry.js",
        Sample3: "Sample3@http://localhost:3004/remote-entry.js",
        Sample4: "Sample4@http://localhost:3005/remote-entry.js",
        Sample5: "Sample5@http://localhost:3006/remote-entry.js",
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
        "@reduxjs/toolkit": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@reduxjs/toolkit"],
        },
        "react-redux": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-redux"],
        },
      },
    }),
  ],
};
