var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/app');
//'webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080',
var config = {
  entry: {
    app: [

    APP_DIR + '/index.jsx']
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/build/",
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react']
      },
      {
          test: /\.scss$/,
          loader: 'style!css!sass'
      },
      {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=5000'
      },
      {
        test: /\.svg$/,
        loader: 'file'
      }
    ]
  }
};

module.exports = config;