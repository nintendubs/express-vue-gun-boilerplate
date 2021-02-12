import Vue from "vue";
import Vuex from "vuex";
import UserModule from "@/store/modules/user-module.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserModule,
  },
});
