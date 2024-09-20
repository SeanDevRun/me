const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // Add the publicPath for GitHub Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/me/'  // Replace with your GitHub repository name
    : '/'
})
