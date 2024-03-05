<template>
  <div class="container"><p @click="countUp">Component C</p></div>
</template>

<script>
export default {
  name: "CompThree",
  methods: {
    countUp() {
      this.$store.commit("increment", 5);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
}
</style>
