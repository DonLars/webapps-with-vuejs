<script setup>
import { ref, reactive, computed, watch } from "vue";

let x = ref(10);
let string = ref("Hallo");
const state = reactive({
  count: 0,
  name: "Lars",
});

const todos = [
  { desc: "Programmieren", done: false },
  { desc: "shoppen", done: false },
  { desc: "kochen", done: true },
];

const decrease = (value) => {
  x.value -= value;
};
const increase = (value) => {
  state.count += value;
};

const largerThan = computed(() => {
  if (state.count > 10) {
    return "Larger";
  } else {
    return "Smaller";
  }
});

watch(
  () => state.count,
  (newvalue, oldvalue) => {
    console.log(newvalue, oldvalue);
  }
);
</script>

<template>
  <div>
    <h2>Hallo Welt2</h2>
    <button v-on:click="decrease(2)">Update --</button>
    <p>{{ x }}</p>
    <button v-on:click="increase(4)">Update ++</button>
    <p>{{ string }}</p>
    <p>{{ string }}</p>
    <p>{{ largerThan }}</p>
    <input type="text" v-model="string" />
    <hr />
    <div v-for="(item, index) in todos" :key="item.desc">
      <p :class="{ open: !item.done, done: item.done }">
        {{ index + 1 }}. {{ item.desc }}
      </p>
    </div>
  </div>
</template>
<style>
.open {
  background-color: darkred;
  color: white;
}
.done {
  background-color: darkgreen;
  color: white;
}
</style>
