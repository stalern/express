module.exports = {

    // All options for webpack-dev-server are supported
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: true,

        https: false,

        hotOnly: false,

        proxy: {
            '/api': {
                // 对应自己的接口
                target: 'http://localhost:9090/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

        // eslint-disable-next-line no-unused-vars
        before: app => {
        }
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,

    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // 第三方插件配置
    pluginOptions: {}
};
