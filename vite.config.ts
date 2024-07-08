import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// // https://vitejs.dev/config/

function resolve(dir:string) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@components": resolve('src/components'), // 路径别名
      "@styles": resolve( 'src/styles'), // 路径别名
      "@assets": resolve('src/assets'), // 路径别名
      "@pages": resolve('src/pages'), // 路径别名
      "@utils": resolve('src/utils'), // 路径别名
    },
    
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/utils.scss";`
      }
    }
  }


})

