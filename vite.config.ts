import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import { presetUno, presetWebFonts } from "unocss";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      preflights: [],
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Roboto",
          },
        }),
      ],
    }),
  ],
});
