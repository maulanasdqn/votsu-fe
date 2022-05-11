import { createPinia } from "pinia";
import { createApp } from "vue";
import { router } from "./router";
import '@unocss/reset/eric-meyer.css'
import 'uno.css'
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
