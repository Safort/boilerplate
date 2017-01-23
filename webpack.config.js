const { resolve, join } = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

let entry;

if (isDev) {
  entry = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    './js/index.js',
  ];
} else {
  entry = './js/index.js';
}

const output = {
  path: resolve(__dirname, 'app/public'),
  publicPath: '/',
  filename: 'bundle.js',
};

const plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss() {
        return [precss, autoprefixer];
      } 
    }
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  new HtmlWebpackPlugin({
    title: 'Title',
    filename: 'index.html',
    template: 'templates/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
];

if (isDev) {
  plugins.unshift(new webpack.HotModuleReplacementPlugin());
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true }));
}


module.exports = {
  context: resolve(__dirname, 'src/frontend'),
  entry,
  output,
  watch: isDev,
  devtool: isDev ? 'source-map' : null,
  plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        })
      },
    ],
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'app/public'),
    host: 'localhost',
    port: 3000,
  },

  performance: {
    hints: false
  },
};
