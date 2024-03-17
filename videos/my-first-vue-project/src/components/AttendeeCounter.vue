<template>
  <p>{{ text }}: {{ counter }}</p>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <hr />
</template>
<script>
export default {
  props: {
    text: String,
    counter: Number,
  },
  methods: {
    increase() {
      if (this.counter >= 0) {
        this.$emit("increase");
        //this.counter++;
      }
    },
    decrease() {
      if (this.counter >= 1) {
        this.$emit("decrease");
        // this.counter--;
      }
    },
  },
};
</script>
<style></style>
