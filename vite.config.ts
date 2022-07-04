import { defineConfig } from 'vite'
import presetUno from '@unocss/preset-uno'
import Unocss from '@unocss/vite'
import presetWebFonts from '@unocss/preset-web-fonts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [
    vue(),
    Unocss({
      preflights: [],
      presets: [presetUno()],
    }),
  ],
})
