<template>
  <div>
    <vs-button @click="createRoom">Create Room</vs-button>

    <div class="grid">
      <vs-row justify="space-between" align="center">
        <div v-for="(room, index) in rooms" :key="index">
          <vs-card class="chatroom-card">
            <template #title>
              <h3>{{ room.name }}</h3>
            </template>
            <template #text>
              <p>Just another chat room.</p>
              <vs-button @click="goToChat(room.id)" danger icon>
                Join Chat
              </vs-button>
            </template>
          </vs-card>
        </div>
      </vs-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "RoomList",
  data: function() {
    return {};
  },
  mounted() {
    this.$store.commit("chat/setRoomList");
  },
  computed: {
    ...mapGetters({ rooms: "chat/getRoomList" }),
  },
  methods: {
    createRoom() {
      this.$store.dispatch("chat/createRoom");
    },
    removeRoom(value) {
      this.$store.dispatch("chat/removeRoom", value);
    },
    goToChat(id) {
      this.$router.push({ path: "/chat/" + id });
    },
  },
};
</script>

<style scoped></style>
