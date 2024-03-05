<template>
  <Navbar />
  <transition name="fade"> <router-view></router-view> </transition>
</template>

<script>
import Navbar from "./components/Nav-bar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
