<template>
  <div id="app">
    <h5>Pretend this is a functional layout.</h5>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      username: "",
      room: "",
    };
  },
  methods: {
    connect(username, room) {
      this.username = username;
      this.room = room;
      console.log("connecting");
      const chatroom = this.$gun.get(this.room);
      if (chatroom) {
        chatroom.map().on((node, key) => {
          console.log(node + " " + key);
        });
      }
      if (!chatroom) {
        chatroom.put({ test: this.username }).on((node, key) => {
          console.log(node + " " + key);
        });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
