const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    '_1': [
      './src/js/_1.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
