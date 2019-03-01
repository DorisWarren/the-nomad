const path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {

    rules: [
      // configurations for loaders will go here!
    ]

  },

  plugins: [
      // configurations for plugins will go here!
  ]

};
