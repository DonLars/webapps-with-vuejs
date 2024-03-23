<template>
  <h2>Das ist eine Test Komponente</h2>
  <h3 :class="cssTypeClass">{{ headline }}</h3>
  <button :click="$emit('your-event-name', 'hello')">Feuer frei!</button>
  <slot>Submit</slot>
  <slot name="header">
    <h2>{{ headline }}</h2>
  </slot>
</template>

<script>
export default {
  name: "TestComp",
  props: {
    headline: String,
    type: {
      type: String,
      default: "green",
    },
  },
  computed: {
    cssTypeClass() {
      return `text-${this.type}`;
    },
  },
  methods: {
    /*  emit() {
        this.$emit("your-event-name");
      }, */
    doSomething(hello) {
      alert(hello);
    },
  },
};
</script>

<style scoped>
.text-green {
  color: green;
}
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
</style>
