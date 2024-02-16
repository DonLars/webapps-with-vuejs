<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style>
body {
  margin: 0;
  font-family: Fredoka;
}
</style>
