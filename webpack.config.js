const path = require('path');

module.exports = {

  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'web/build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: path.resolve(__dirname, "web"),
    compress: true,
    port: 9000
  }
};