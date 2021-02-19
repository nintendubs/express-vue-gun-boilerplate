<template>
  <div>
    {{ signedIn }}
    <div v-for="message in messages" :key="message.id">
      <vs-alert justifty="left" align="left">
        <template #icon>
          <i class="bx bxs-chat"></i>
        </template>
        <template #title>
          {{ message.sender }}
        </template>
        {{ message.text }}
      </vs-alert>
    </div>
    <div>
      <vs-row :w="fullwidth">
        <vs-col w="11">
          <vs-input id="chat-input" v-model="newMessage" />
        </vs-col>
        <vs-col w="1">
          <vs-button @click="sendMessage()">Send</vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<style>
#chat-input input {
  width: 100%;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ChatView",
  data: function() {
    return {
      newMessage: "",
      oldMessages: "",
      fullwidth: 12,
    };
  },
  mounted() {
    this.setChat();
  },
  unmounted() {
    this.$store.commit("chat/setChat", null);
  },
  methods: {
    sendMessage() {
      console.log(this.newMessage);
      let data = {
        id: this.$route.params.id,
        message: this.newMessage,
        user: "TestUser",
      };
      this.$store.commit("chat/sendMessage", data);
    },
    setChat() {
      let id = this.$route.params.id;
      console.log("mounted");
      console.log(id);
      this.$store.commit("chat/setChat", id);
    },
  },
  computed: {
    ...mapGetters({ messages: "chat/getMessages", signedIn: "user/signedIn" }),
  },
};
</script>
