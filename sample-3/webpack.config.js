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
    port: 3004,
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ModuleFederationPlugin({
      name: "Sample3",
      filename: "remote-entry.js",
      exposes: {
        "./ModularCssButton": "./src/components/ModularCssButton",
        "./PrefixCssButton": "./src/components/PrefixCssButton",
        "./OverlapCssButton": "./src/components/OverlapCssButton",
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
