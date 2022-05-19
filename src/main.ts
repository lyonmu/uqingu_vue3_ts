import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "./router";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(Router);

app.mount("#app");
