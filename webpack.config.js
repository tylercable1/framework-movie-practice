var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src'); //jsx
var DIST_DIR = path.join(__dirname, '/client/dist'); // where bundle gets served

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015'] //remove 'react' for angular
       }
      }
    ]
  }
};

// all you have to do is run webpack


//npm module that needs to be intalled