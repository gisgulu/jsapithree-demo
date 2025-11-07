import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
          {src: 'node_modules/@baidumap/mapv-three/dist/assets', dest: 'public/mapvthree'},
      ],
      verbose: true,  //  vite需要加这个参数
      hook: 'buildStart', // vite需要加这个参数
  }),
  ],
})
