import twig from 'vite-plugin-twig'
const {
  resolve
} = require('path')
const {
  defineConfig
} = require('vite')


module.exports = defineConfig({
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false, // Bật tùy chọn này
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'scripts/[name].js',
        assetFileNames: 'styles/styles.[ext]',
      },
      input: {
        main: '/scripts/main.js', // Chỉ định một đầu vào duy nhất
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      }
    },
    // copyPublicDir:true
  },
  plugins: [
    twig()
  ]
})