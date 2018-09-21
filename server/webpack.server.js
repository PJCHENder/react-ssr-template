const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',                                   // 這個 bundle 檔是建立給 nodeJS 而非瀏覽器的
  context: path.resolve(__dirname, 'src'),   // 設定讀取檔案的 base directory
  entry: './index.js',                              // server App 的進入點
  output: {
    // output 檔案
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
