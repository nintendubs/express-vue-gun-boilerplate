<template>
  <div>
    Username: <input v-model="username" />
    <br />
    Password: <input v-model="password" />
    <br />
    <button @click="register">Register</button
    ><button @click="login">Login</button>
    <br />
    <div v-if="username.length >= 1">{{ username }} is your username</div>
    <br />
    <div v-if="password.length >= 1">{{ password }} is your password</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["createUser", "loginUser"]),
    register() {
      let userData = { username: this.username, password: this.password };
      this.createUser(userData);
    },
    login() {
      let userData = { username: this.username, password: this.password };
      this.loginUser(userData);
    },
  },
};
</script>
