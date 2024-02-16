<template>
  <header>
    <input type="text" placeholder="Suche …" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background: hotpink;
  height: 150px;
  padding: 1rem;
  display: flex;
  align-items: end;
  border-radius: 0 0 1rem 1rem;
}

input {
  border: 0;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
}
</style>
