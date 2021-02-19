import $gun from "@/utils/gunHelper";
import $api from "@/utils/apiHelper";
import { messageFormat } from "@/utils/chatHelper";
import store from "..";

const state = {
  chat: [],
  roomList: [],
  messages: [],
  test: {},
};

const getters = {
  getRoomList: (state) => state.roomList,
  getMessages: (state) => state.messages,
};

const actions = {
  // Create New Chat room
  createRoom() {
    $api.get("http://localhost:3030/gun/start-chat").then((response) => {
      console.log(response);
    });
  },

  // Remove Existing Chat room
  removeRoom({ context }, roomId) {
    console.log(context);
    console.log("room id: " + roomId);
    $api
      .post("http://localhost:3030/gun/delete-chat", { id: roomId })
      .then((response) => {
        console.log(response);
        store.commit("chat/setRoomList");
      });
  },
};

const mutations = {
  setRoomList(state) {
    let arr = [];
    $gun
      .get("chatrooms")
      .map()
      .on(function(data) {
        if (data != null) arr.push(data);
      })
      .then(function() {
        state.roomList = arr;
      });
  },
  setChat(state, id) {
    let arr = [];
    console.log("setting chat");
    console.log(id);
    if (id) {
      $gun
        .get("messages")
        .get(id)
        .map((prop) => {
          console.log("prop");
          console.log(prop);
          if (prop.id) return prop;
          else state.messages = [];
        })
        .once(function(data) {
          console.log(data);
          if (data) arr.push(data);
          if (data === null) arr = [];
        })
        .then(() => {
          state.messages = arr;
        });
    } else {
      $gun
        .get("messages")
        .get(id)
        .off();
      state.messages = [];
    }
    console.log(state.messages);
  },
  sendMessage(state, data) {
    const message = messageFormat(data);

    $gun
      .get("messages")
      .get(message.conversationId)
      .put({ [message.id]: message });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
