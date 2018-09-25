const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const serverConfig = {
  mode: 'development',
  target: 'node',                              // 這個 bundle 檔是建立給 nodeJS 而非瀏覽器的
  context: path.resolve(__dirname, 'src'),     // 設定讀取檔案的 base directory
  entry: './index.server.js',                  // server App 的進入點
  output: {
    // output 檔案
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]       // 如果這個套件可以在 node_modules 中找到，則不要打包到 bundle 檔中
};

module.exports = webpackMerge(baseConfig, serverConfig);
