"use strict";

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const {getEntries} = require('./helpers')
// warning in output "Entrypoint undefined = extract-text-webpack-plugin-output-filename"
// see here: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/731

console.log(getEntries())
let webpackConfig = {
  // go down a step to reach assets
  context: path.resolve(__dirname, "../"),

  // entry: {
  //   main: ["./scripts/app.ts", "./styles/main.scss"],
  // },
  entry: getEntries(),

  output: {
    path: path.resolve(__dirname, "../../assets"),
    filename: "scripts/[name].js",
  },

  module: {
    rules: [
      {
        //        test: /\.js$/,
        test: /\.(js|jsx|tsx|ts)$/,

        //   include: /scripts/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader},
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname, "./postcss.config.js"),
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./img/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./fonts/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: "assets"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      //allChunks: true,
    }),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:2368",
        files: [
          {
            match: ["**/*.hbs", "./src/*.*"],
          },
        ],
      },
      {
        reload: true,
      }
    ),
  ],

  devtool: "source-map",
};

module.exports = webpackConfig;
