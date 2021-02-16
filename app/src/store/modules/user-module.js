import $gun from "@/utils/gunHelper";

const state = {
  user: [],
};

const getters = {
  theUser: (state) => state.user,
};

const actions = {
  async createUser({ commit }, userData) {
    console.log("creating user");
    console.log(userData);
    console.log(commit);
    $gun.user().create(userData.username, userData.password, function(ack) {
      console.log(ack);
      console.log("user created!");
    });
  },
  async loginUser({ commit }, userData) {
    console.log("logging in user");
    console.log(userData);
    console.log(commit);
    $gun
      .user()
      .auth(userData.username, userData.password, function(ack) {
        console.log(ack);
      })
      .recall({ sessionStorage: true });
  },
  async logoutUser() {
    console.log("Logging out");
    $gun.user().leave();
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
