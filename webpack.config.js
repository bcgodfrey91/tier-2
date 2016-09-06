const path = require('path');
module.exports = {
 entry: {
   main: ['babel-polyfill', './src/index.js'],
  //  test: ['babel-polyfill', 'mocha!./test/index.js'],
 },
 output: {
   path: __dirname,
   publicPath: "/public/",
   filename: '[name].bundle.js',
 },

 module: {
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react'],
       },
     },
     { test: /\.css$/, loader: 'style!css' },
     { test: /\.scss$/, loader: 'style!css!sass' },
   ],
 },
 resolve: {
   extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
 },
 devtool: 'cheap-source-map'
};
