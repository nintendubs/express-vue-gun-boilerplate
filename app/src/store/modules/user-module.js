import $gun from "@/utils/gunHelper";
import router from "@/router";

const state = {
  user: {},
  signedIn: false,
};

const getters = {
  info: (state) => state.user,
  signedIn: (state) => state.signedIn,
};

const actions = {
  async createUser(context, userData) {
    // Creates a new GunDB User using native gun.user() api
    console.log(userData);
    $gun.user().create(userData.username, userData.password, function(ack) {
      console.log(ack);
      let data = { alias: userData.username, pub: ack.pub };
      context.commit("setUser", data);
    });
  },
  async loginUser({ commit }, userData) {
    console.log("logging in user");
    console.log(userData);
    console.log(commit);
    $gun
      .user()
      .auth(userData.username, userData.password, function(ack) {
        if (ack.put.pub) {
          let data = { alias: ack.put.alias, pub: ack.put.pub };
          commit("setUser", data);
        }
      })
      .recall({ sessionStorage: true });
  },
  async logoutUser({ commit }) {
    console.log("Logging out");
    $gun.user().leave();
    commit("setUser", null);
  },
};

const mutations = {
  setUser(state, data) {
    console.log(data);
    if (data != null) {
      state.user.alias = data.alias;
      state.user.pub = data.pub;
      state.signedIn = true;
    } else {
      state.user = {};
      state.signedIn = false;
      router.push("/");
    }
    console.log("setting user data");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
