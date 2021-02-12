<template>
  <div>
    <h1>Preferences</h1>
    <input
      v-model="username"
      placeholder="Username"
      @keyup="update('username')"
    />
    <input v-model="room" placeholder="Room ID" @keyup="$emit('update:room')" />
    <button @click="$emit('connect')">Connect</button>
  </div>
</template>

<script>
export default {
  name: "Prefs",
  props: {
    username: String,
    room: String,
  },
  methods: {
    update(value) {
      let myValue = "";
      value == "username" ? (myValue = username) : (myValue = room);
      this.$emit("update-values", myValue);
    },
  },
};
</script>
