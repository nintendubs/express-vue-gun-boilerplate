<template>
  <div>
    <button @click="createRoom">Create Room</button>
    <div v-for="(room, index) in rooms" :key="index">
      <router-link :to="{ name: 'Chat', params: { id: room.id } }">{{
        room.name
      }}</router-link>
      <button v-if="room.id != null" @click="removeRoom(room.id)">X</button>
    </div>
    <br />
    <br />
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
  },
};
</script>
