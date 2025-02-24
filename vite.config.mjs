import { defineConfig } from 'vite';
import path from 'path';
import twig from 'vite-plugin-twig';
import tailwindcss from '@tailwindcss/postcss';

export default defineConfig({
  plugins: [
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
        home: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
      }
    },
    // copyPublicDir:true
  },
})