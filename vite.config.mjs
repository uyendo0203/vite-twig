import { defineConfig } from 'vite';
import path from 'path';
import twig from 'vite-plugin-twig';
import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    twig({
      order: 'pre', // Thay thế 'enforce' bằng 'order'
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false, // Bật tùy chọn này
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'scripts/[name].js',
        assetFileNames: 'styles/main.[ext]',
      },
      input: {
        styles: '/scripts/styles.js',
        jquery: '/scripts/jquery.js',
        react: '/react/main.jsx',
        react1: '/react/react1.jsx',
        react2: '/react/react2.jsx',
        home: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
      }
    },
    // copyPublicDir:true
  },
})