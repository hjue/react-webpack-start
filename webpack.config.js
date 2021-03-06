var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: {
    app: [

    APP_DIR + '/index.jsx']
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/dist/",
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-1']
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
      },
      { test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = config;