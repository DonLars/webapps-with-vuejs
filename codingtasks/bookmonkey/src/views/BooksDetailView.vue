<template>
  <h1>Books Detail Page</h1>
  <h2>{{ bookData.title }}</h2>
  <div>{{ bookData }}</div>
  <div>
    <router-link :to="{ name: 'books' }">Back to overview</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookData: {},
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:4730/books/" + this.$route.params.id
    );
    this.bookData = await response.json();
  },
};
</script>
