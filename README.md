# webpack-exercise

### 遇到的问题

- 启动webpack-dev-server时,报错`webpack Dev Server Invalid Options options should NOT have additional properties`

  原因是`webpack.config.js`中的devServer的参数写错了,把port写成prot了