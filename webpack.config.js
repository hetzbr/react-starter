const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    openPage: 'hello-world',
  },
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'main')],
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
