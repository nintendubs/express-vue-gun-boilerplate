import Vue from "vue";
import Gun from "gun";
import sea from "gun/sea";

const gun = new Gun({ peers: "http://127.0.0.1:3030/gun", axe: false });

Vue.prototype.$gun = gun;
Vue.prototype.$sea = sea;

export default Vue.prototype.$gun;
