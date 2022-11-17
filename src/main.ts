import {createApp} from "vue"
import {createPinia} from "pinia"
import {Quasar} from "quasar"

import "@quasar/extras/material-icons/material-icons.css"
import "quasar/src/css/index.sass"

import App from "./App.vue"
import router from "./router"

import "./assets/main.scss"
import { worker } from "./mocks/index"
if (process.env.NODE_ENV === "development") {
   worker.start();
}

const app = createApp(App)

app.use(Quasar, {
   plugins: {},
})
app.use(router)

app.mount("#app")
