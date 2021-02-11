import Vue from "vue";
import App from "./App.vue";
import Gun from "./assets/gun.js";

Vue.prototype.$gun = new Gun("http://127.0.0.1:3030/gun");

Vue.config.productionTip = false;

new Vue({
  data: {
    testData: [],
  },
  render: (h) => h(App),
}).$mount("#app");
