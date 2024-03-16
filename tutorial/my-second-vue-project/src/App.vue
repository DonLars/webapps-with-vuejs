<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <MyFirstComponent :headline="headline" type="red" />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import MyFirstComponent from "@/components/MyFirstComponent.vue";

export default {
  data() {
    return {
      headline: "Meine Dings",
    };
  },
  name: "App",
  components: {
    HelloWorld,
    MyFirstComponent,
  },
};
</script>

<style></style>
