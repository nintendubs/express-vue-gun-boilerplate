<template>
  <div>
    Chat
    <br />
    <div v-for="message in messages" :key="message.id">
      {{ message.sender }} - {{ message.text }}
    </div>
    <br />
    <input v-model="newMessage" />
    <button @click="sendMessage()">Send</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ChatView",
  data: function() {
    return {
      newMessage: "",
      oldMessages: "",
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.commit("chat/setChat", id);
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
  },
  computed: {
    ...mapGetters({ messages: "chat/getMessages" }),
  },
};
</script>
