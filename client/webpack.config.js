const { resolve, join } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';

  return {
    context: resolve(__dirname, 'src'),
    entry: './index.tsx',
    output: {
      path: resolve(__dirname, '../backend/app/public'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devtool: 'source-map',

    mode: isProd ? argv.mode : 'development',
    module: {
      rules: [
        {
          test: /\.(tsx?)|(js)?$/,
          include: __dirname,
          exclude: [/node_modules/, /src\/index.html/],
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      moduleIds: 'named',
    },

    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: isProd ? 'disabled' : 'static',
        openAnalyzer: false,
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Title',
        alwaysWriteToDisk: true,
        filename: 'index.html',
        template: './index.html',
        minify: false,
      }),
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
    },

    devServer: {
      static: join(__dirname, '../app'),
      compress: true,
      port: 3000,
      hot: !isProd,
      historyApiFallback: true,
    },
  };
};
