const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: resolve(__dirname, 'src/client'),
  entry: './index.tsx',
  output: {
    path: resolve(__dirname, 'app/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Title',
      filename: 'index.html',
      template: 'templates/index.html',
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }

};
