<script setup>
import { RouterLink } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <h2>App</h2>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </ul>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </router-view>
  </div>
</template>

<style scoped>
a {
  padding: 1rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
