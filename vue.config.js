// module.exports ={
//     devServer: {
//       host: 'localhost',
//       port: 3001,  //没被占用，可以使用的端口
//       open: true,
//       proxy: {
//         '/api':{
//           target: 'http://localhost:8080/api/', //接口域名
//           changeOrigin: true,             //是否跨域
//           secure: false,                   //是否https接口
//           pathRewrite: {                  //路径重置
//             '^/api': ''
//           }
//         }
//       }
//     }
//   }