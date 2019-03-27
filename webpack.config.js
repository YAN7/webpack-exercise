const path = require('path');
const Webpck = require('webpack');
const chalk = require('chalk');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
  mode: 'development',
  // 多文件入口, 输出的时候如果带上[name]配置则每个文件对应一个输出文件
  // entry: {
  //   index: './src/index.js',
  //   app: './src/app.js',
  // },
  // 字符串的写法是 {main: 'yourpath'}的简写
  entry: './src/index.js',
  // 输出的时候仍然为打包为一个文件,是{main: ['yourpathArray']}的简写
  // entry: ['./src/index.js', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[hash:5].js',
    filename: '[name].[chunkhash:5].js'
  },
  plugins: [
    // new Webpck.ProgressPlugin(function handler(percentage, msg) {
    //   console.log((percentage.toFixed(2) * 100) + '%', msg);
    // }), // 显示进度
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.cyan.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
      summary: false, // 不使用默认的build成功之后的log
      customSummary: (a, b, c) => console.log(chalk.green.bold(`Build success in ${a}`)) // 自定义build成功之后的log
    }), // 显示进度条
    new CleanWebpackPlugin(), // 每次打包前清理dist文件夹
    new HtmlWebpackPlugin({
      title: 'yan7',
      template: path.join(__dirname, 'src/index.html'), // 打包的模板文件
    }),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.join(__dirname, 'src'),
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  stats: 'errors-only', //打包时控制台只显示错误信息
}