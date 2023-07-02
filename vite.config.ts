import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vue2 from '@vitejs/plugin-vue2'
import * as compiler from 'vue2/compiler-sfc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      exclude: ['sub/**'],
    }),
    vue2({
      include: ['sub/**/*.vue'],
      // @ts-ignore
      compiler,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve('src') },
      { find: 'sub', replacement: resolve('sub') },
      { find: 'vue', replacement: 'vue' },
    ]
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        sub: resolve("sub/index.html"),
      }
    }
  }
})

function resolve(...paths: string[]) {
  return fileURLToPath(new URL(path.resolve(...paths), import.meta.url))
}