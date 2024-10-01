const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), 
        '@assets':  path.resolve(__dirname, 'src/assets'),  // Assuming 'assets' is inside 'src'
        '@common': path.resolve(__dirname, 'src/components/common'),  // Assuming 'assets' is inside 'src'        
        '@components': path.resolve(__dirname, 'src/components'),  // Assuming 'assets' is inside 'src'        
        '@views': path.resolve(__dirname, 'src/views')  // Assuming 'views' is inside 'src'
      }
    },
  },
  transpileDependencies: true,  
  // Add the publicPath for GitHub Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/me/'  // Replace with your GitHub repository name
    : '/'
})
