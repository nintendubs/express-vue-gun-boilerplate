<template>
  <div>
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
      <vs-input icon-after v-model="newMessage">
        <template #icon>
          <i class="bx bx-lock-open-alt"></i>
        </template>
      </vs-input>
      <vs-button @click="sendMessage()">Send</vs-button>
    </div>
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
  created() {
    let id = this.$route.params.id;
    console.log(id);
    this.$store.commit("chat/setChat", id);
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
  },
  computed: {
    ...mapGetters({ messages: "chat/getMessages" }),
  },
};
</script>
