/*
    ./webpack.config.js
*/
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'statics/dist'),
    filename: 'index_bundle.js',
    publicPath: '/dist'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 1324,
    inline: true,
    contentBase: path.join(__dirname, "statics"),
    index: './statics/index.html',
    historyApiFallback: {
      index: '/statics/'
    }
  }
}
