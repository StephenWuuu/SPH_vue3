const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    proxy: {
      "/api": {
        // 只对请求路由以/api 开头的请求进行代理转发
        target: "http://gmall-h5-api.atguigu.cn", // 转发的目标 url
        changeOrigin: true, // 支持跨域
      },
    },
  },
});
