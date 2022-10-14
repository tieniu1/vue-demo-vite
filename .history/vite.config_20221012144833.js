import { fileURLToPath, URL } from 'node:url';
import vitePluginImp from 'vite-plugin-imp';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
      ],
    }),
    vitePluginImp({
      // vite 自动引入 element组件样式
      libList: [
        {
          libName: 'element-plus',
          style: (name) => `element-plus/theme-chalk/${name}.css`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
