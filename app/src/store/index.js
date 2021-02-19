import Vue from "vue";
import Vuex from "vuex";
import UserModule from "@/store/modules/user-module.js";
import ChatModule from "@/store/modules/chat-module.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: UserModule,
    chat: ChatModule,
  },
  plugins: [createPersistedState],
});

export default function() {
  return Store;
}

export { Store };
