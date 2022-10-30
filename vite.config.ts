import {fileURLToPath, URL} from "node:url"

import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {quasar} from "@quasar/vite-plugin"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      Pages(),
      quasar({
         sassVariables: "src/quasar-variables.sass",
      }),
   ],
   resolve: {
      alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
   },
})
