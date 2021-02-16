import Vue from "vue";
import axios from "axios";

Vue.prototype.$api = axios;

export default Vue.prototype.$api;
