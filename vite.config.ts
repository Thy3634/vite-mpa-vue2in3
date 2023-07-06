import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vue2 from '@vitejs/plugin-vue2'
import * as compiler from 'vue2/compiler-sfc'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      exclude: ['src/sub/**'],
    }),
    vue2({
      include: ['src/sub/**/*.vue'],
      // @ts-ignore
      compiler,
    }),
    commonjs({
      include: ['packages/**']
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve('src') },
      { find: 'sub', replacement: resolve('src/sub') },
      { find: 'vue', replacement: 'vue' },
      { find: 'element-ui', replacement: resolve('packages/element-ui') }
    ]
  },
  optimizeDeps: {
    include: ['element-ui']
  },
})

function resolve(...paths: string[]) {
  return fileURLToPath(new URL(path.resolve(...paths), import.meta.url))
}