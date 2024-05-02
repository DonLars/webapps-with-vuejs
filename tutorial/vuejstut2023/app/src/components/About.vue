<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const prop = ref("Lars Wagner");

const changeIt = (data) => {
  console.log(data);
  prop.value = data;
};
</script>

<template>
  <div>
    <h2>About Template</h2>
    <Child :name="prop" @changeString="changeIt" />
  </div>
</template>
