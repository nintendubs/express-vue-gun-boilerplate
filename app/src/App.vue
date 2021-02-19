<template>
  <div id="app" class="grid">
    <vs-row :w="wVal">
      <vs-col w="3" align="center" justify="center">
        <vs-sidebar v-model="active" background="primary" textWhite open>
          <template #logo>
            Vue + GunDB Chat
            <br />
          </template>
          <div v-if="signedIn">
            <vs-sidebar-item textWhite id="Home" :to="{ path: '/' }">
              <template #icon>
                <i class="bx bx-user"></i>
              </template>
              Home
            </vs-sidebar-item>
            <vs-sidebar-item
              textWhite
              id="Chatrooms"
              :to="{ path: '/chatrooms' }"
            >
              <template #icon>
                <i class="bx bx-chat"></i>
              </template>
              Chatrooms
            </vs-sidebar-item>
          </div>
          <div v-else>
            <vs-sidebar-item textWhite id="Login" :to="{ path: '/login' }">
              <template #icon>
                <i class="bx bx-log-in"></i>
              </template>
              Login
            </vs-sidebar-item>
            <vs-sidebar-item id="Register" :to="{ path: '/register' }">
              <template #icon>
                <i class="bx bx-user-plus"></i>
              </template>
              Register
            </vs-sidebar-item>
          </div>
          <template #footer>
            <vs-col w="12">
              <UserInfo />
              <vs-button @click="logout()" warn gradient>
                <i class="bx bx-log-out"></i> Logout
              </vs-button>
            </vs-col>
          </template>
        </vs-sidebar>
      </vs-col>
      <vs-col w="9" align="center" justify="center">
        <router-view :key="$route.path"></router-view>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserInfo from "@/components/UserInfo";
export default {
  name: "App",
  components: {
    UserInfo,
  },
  data: function() {
    return {
      username: "",
      room: "",
      active: "chat",
      wVal: 12,
    };
  },
  computed: {
    ...mapGetters({ signedIn: "user/signedIn" }),
  },
  methods: {
    ...mapActions({
      logout: "user/logoutUser",
    }),
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
