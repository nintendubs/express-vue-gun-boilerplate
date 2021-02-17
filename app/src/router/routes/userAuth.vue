<template>
  <div>
    <UserAuthForm></UserAuthForm>
  </div>
</template>
<script>
import UserAuthForm from "@/components/UserAuthForm";
export default {
  name: "Login",
  components: {
    UserAuthForm,
  },
  data: function() {
    return {
      theRoute: "",
    };
  },
};
</script>
