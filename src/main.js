import { loadFonts } from "./plugins/webfontloader";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import moment from "moment/min/moment-with-locales";
import "toastify-js/src/toastify.css"

loadFonts();

moment.locale("pt-br");

createApp(App).use(router).use(vuetify).mount("#app");
