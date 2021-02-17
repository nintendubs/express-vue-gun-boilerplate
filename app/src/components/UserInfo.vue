<template>
  <div>
    <div v-if="signedIn">Welcome {{ userInfo.alias }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserInfo",
  computed: {
    ...mapGetters({ userInfo: "user/info", signedIn: "user/signedIn" }),
  },
};
</script>
