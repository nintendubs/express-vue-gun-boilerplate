<template>
  <div>
    <div>
      <button>+</button>
    </div>
    <Register></Register>
    <div>
      <RoomList />
    </div>
  </div>
</template>
<script>
import Register from "@/components/UserRegister";
import RoomList from "@/components/RoomList";

export default {
  name: "Homepage",
  components: {
    Register,
    RoomList,
  },
};
</script>
