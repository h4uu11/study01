import {createApp} from "vue"
import {createPinia} from "pinia"
import {Quasar} from "quasar"

import "@quasar/extras/material-icons/material-icons.css"
import "quasar/src/css/index.sass"

import App from "./App.vue"
import router from "./router"

import "./assets/main.scss"

const main = async () => {
   // Start mock server
   if (import.meta.env.DEV || import.meta.env.VITE_IS_VERCEL) {
      const {worker} = await import("./mocks/index")
      worker.start()
   }

   const app = createApp(App)

   app.use(Quasar, {
      plugins: {},
   })

   app.use(router)

   app.mount("#app")
}

main()
