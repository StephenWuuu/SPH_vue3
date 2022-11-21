import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@/mock/mockRequest.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueLazyLoad from 'vue3-lazyload'
import keli from "@/assets/30.gif"

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(VueLazyLoad, {
  // options...
  loading:keli
})
app.use(createPinia());
app.use(router).mount("#app");
