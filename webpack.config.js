const path = require('path');
// const BavelPluginStyledComponents = require('babel-plugin-styled-components');

module.exports = {
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',

  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  // plugins: ["babel-plugin-styled-components"],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    port: 9000,
    inline: false,
    contentBase: './public',
  },
  devtool: 'source-map',
};
