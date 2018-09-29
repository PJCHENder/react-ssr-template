const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env',
              // 因為有用 @babel/polyfill
              // 設定這個避免整包 polyfill 都被載入
              {
                useBuiltIns: 'entry',
                targets: "> 0.25%, not dead"
              }
            ], '@babel/preset-react']
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
}
