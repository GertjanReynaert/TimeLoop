var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app/manifest.js'
  ],

  output: {
    path: './bundle',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?stage=1'],
        exclude: /node_modules/
      }
    ]
  }
};
