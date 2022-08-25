// 别忘记引入， 该模块不用下载，自带的
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: '0.0.0.0', // 允许外部ip访问
    port: 8080, // 端口
    https: false, // 启用https
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: {
      warnings: true,
      errors: true,
    }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
        target: 'http://1.117.244.183:8080/',
        // target: 'http://10.255.111.50:8184',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        // pathRewrite: {
        //   '^/api': '/'
        // },
      },
      '/mock': {
        target: 'http://rap2api.taobao.org/app/mock/285673/',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
      '/sqlSelect': {
        target: 'http://10.255.111.61:8060',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/sqlSelect': '',
        },
      },
    }, // 代理转发配置，用于调试环境
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'], // 移除console
            },
          },
        }),
      ],
    },
  },
};
