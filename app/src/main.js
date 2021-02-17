import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import $gun from "@/utils/gunHelper.js";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";

Vue.use($gun);
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
