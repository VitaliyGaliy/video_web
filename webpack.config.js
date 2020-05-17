const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

var isProduction =
  process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    filename: "bundle.js",
    filename: isProduction ? "[contenthash].js" : "[hash].js",
    chunkFilename: isProduction
      ? "[name].[contenthash].js"
      : "[name].[hash].js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          // isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          filename: isProduction
            ? "vendor.[contenthash].js"
            : "vendor.[hash].js",
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[hash].css",
      disable: !isProduction,
    }),
    new HtmlWebpackPlugin({
      template: "./src/assets/index.html",
      reject: true,
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: "minimal",
    clientLogLevel: "warning",
  },
  devtool: isProduction ? "hidden-source-map" : "cheap-module-eval-source-map",
};
