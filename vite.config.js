import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// export default {
//     base: './',
//     plugins: [vue()],
//     optimizeDeps: {
//         include: ['schart.js']
//     },
//     server: {
//         cors: true, // 默认启用并允许任何源
//         open: true, // 在服务器启动时自动在浏览器中打开应用程序
//         //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
//         proxy: {
//             '/api': {
//                 target: 'http://8.134.193.131:8080/',   //代理接口
//                 changeOrigin: true,
//                 rewrite: (path) => path.replace(/^\/api/, '')
//           }
//         }
//     }
// }

export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    },
    server:{
      proxy:{
      //这里是通过请求/api 来转发到 接口
      //假如你要请求https://api.*.com/a/a
      //那么axios的url，可以配置为 /api/a/a
        '/api': 'http://8.134.193.131:8080/'
      }
    }
  })