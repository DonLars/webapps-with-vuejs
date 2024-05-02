<script setup>
import { ref, inject } from "vue";
import { nameStore } from "../../../app/store/store";

const store = nameStore();
const name = "Max Mustermann";

const props = defineProps({
  name: {
    type: String,
    default: "Unbekannter User",
  },
});

const emit = defineEmits(["changeString"]);
const handleClick = () => {
  emit("changeString", name);
};

const vorname = inject("propvalue");
</script>

<template>
  <div>
    <h3>{{ props.name }}</h3>
    <p>{{ vorname }}</p>
    <p>{{ store.name }}</p>
    <p>{{ store.age }}</p>
    <p><button @click="store.increaseAge">Mache Herbert älter</button></p>
    <!-- <button @click="$emit('changeString')">Change String</button> -->
    <button @click="handleClick">Change String</button>
  </div>
</template>
