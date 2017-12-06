var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');


var config = {

   entry: './src/index.js',
   
   output: {
       path:__dirname ,
      filename: 'bundle.js',
      publicPath:'/'
   },
   
   devServer: {
      inline: true,
      port: 8000,
      historyApiFallback:true
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react','stage-1'],
               plugins: ['babel-plugin-react-html-attrs', 'babel-plugin-transform-class-properties', 'babel-plugin-transform-decorators-legacy'],

            }
         }
      ]
   }
}

module.exports = config;
