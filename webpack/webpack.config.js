"use strict";

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const {getEntries} = require('./helpers')
// warning in output "Entrypoint undefined = extract-text-webpack-plugin-output-filename"
// see here: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/731

let webpackConfig = {
  context: path.resolve(__dirname, "../"),
  entry: getEntries(),

  output: {
    path: path.resolve(__dirname, "../assets"),
//    publicPath: process.env.NODE_ENV === 'production' ? `https://name/assets/` : '//assets/',
    publicPath: '/assets/',
    filename: "scripts/[name].js",
    crossOriginLoading: 'anonymous',
    hotUpdateChunkFilename: 'hot-update.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test:  /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader},
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                    },
                  ],
                  require('autoprefixer'),
                 // require('postcss-flexbugs-fixes'),
                  //require('cssnano')
                ],
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
        test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            return `[name][ext]?t=${new Date().getTime()}`;
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, '..', 'src',  'fonts'),
        ],
        /* Exclude images while working with fonts, e.g. .svg can be both image or font. */
        exclude: path.resolve(__dirname, '..', 'src',  'images'),
        type: 'asset/resource',
        generator: {
          filename: '[name][ext].css',
        },
      },

    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css'],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'src',  'others') , to: '[name][ext]' },
        { from: path.resolve(__dirname, '..', 'src',  'favicons'), to: '[name][ext]' },
        { from: path.resolve(__dirname, '..', 'src',  'images'), to: 'images/[name][ext]' },
        { from: path.resolve(__dirname, '..', 'src', 'fonts'), to: '[name][ext].css' },
      ],
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: (pathData) => {
        // replace `style` from heplers/getEntries result
        return `/styles/${pathData.chunk.name.replace('.style', '')}.css`;
      },
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
