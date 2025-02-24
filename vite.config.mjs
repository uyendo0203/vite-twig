import twig from 'vite-plugin-twig'
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from '@tailwindcss/postcss';


export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  base:'./',
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false, // Bật tùy chọn này
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'scripts/[name].js',
        assetFileNames: 'styles/main.[ext]',
      },
      input: {
        // main: '/scripts/main.js', // Chỉ định một đầu vào duy nhất
        styles: '/scripts/styles.js',
        main: '/scripts/main.js',
        home: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
      }
    },
    // copyPublicDir:true
  },
  plugins: [
    twig(),
    // tailwindcssVite(),
  ]
})