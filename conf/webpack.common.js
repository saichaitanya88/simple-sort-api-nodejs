const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {

  context: path.join(process.cwd(), 'src'), //the home directory for webpack

  devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    app: './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.js'],  // extensions that are used
    modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  // plugins: [
  //   new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "vendor"
  //   })
  // ]
};
