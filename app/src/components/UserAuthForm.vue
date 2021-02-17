<template>
  <div class="center">
    <vs-card>
      <template #title>
        {{ route === "/login" ? "Login" : "Register" }}
      </template>
      <template #text>
        <div class="center content-inputs">
          <vs-input border v-model="username" placeholder="Username">
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input
            border
            type="password"
            v-model="password"
            placeholder="Password"
          >
            <template #icon>
              <i class="bx bx-lock-open-alt"></i>
            </template>
          </vs-input>
          <vs-input
            v-if="route === '/register'"
            border
            type="password"
            v-model="passwordConfirm"
            placeholder="Confirm Password"
          >
            <template #icon>
              <i class="bx bx-lock-open-alt"></i>
            </template>
          </vs-input>
        </div>
      </template>
      <template #buttons>
        <vs-button
          @click="
            {
              route === '/login' ? login() : register();
            }
          "
        >
          {{ route === "/login" ? "Login" : "Register" }}
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
    };
  },
  computed: {
    route() {
      return this.$route.path;
    },
  },
  methods: {
    ...mapActions({
      createUser: "user/createUser",
      loginUser: "user/loginUser",
    }),
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
