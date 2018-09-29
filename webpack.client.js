const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
  mode: 'development',
  // 透過 content 設定讀取檔案的 base directory
  context: path.resolve(__dirname, 'src/client/'),
  // 原始路徑是 ./src/client/index.client.js
  entry: './index.client.js',
  // 這裡面的檔案是要提供給瀏覽器使用的
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = webpackMerge(baseConfig, clientConfig);
