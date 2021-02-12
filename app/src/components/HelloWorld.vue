<template>
  <div class="hello">
    <!--
    <div>{{ testData }}</div>
    <div>{{ theData }}</div>
    <textarea v-model="testInput"></textarea>
    <button v-on:click="testFunction">Test Gun</button>
    -->
    Hello World
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function() {
    return {
      testData: "Nothing yet...",
      theData: "",
      testInput: "",
    };
  },
  methods: {
    async testFunction() {
      console.log("clicked");
      this.$gun
        .get("test")
        .put({ test: this.testInput })
        .map()
        .on((node, key) => {
          this.theData = node;
          console.log(node + " " + key);
        });
      console.log(this.theData);
    },
  },
  mounted: function() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
