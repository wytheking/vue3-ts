import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @代替src
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  }
})
