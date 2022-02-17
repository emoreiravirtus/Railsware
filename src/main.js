import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueMaskDirective } from 'v-mask';

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
  beforeMount: vMaskV2.bind,
  updated: vMaskV2.componentUpdated,
  unmounted: vMaskV2.unbind
};
createApp(App).use(store).use(router).directive('mask', vMaskV3).mount("#app");
