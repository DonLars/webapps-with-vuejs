<template>
  <BaseList headline="All Bookmonkey Books" :list-items="books">
    <template #list-item="{ item }"
      ><strong>{{ item.title }}</strong> - {{ item.isbn }}
      <router-link :to="{ name: 'booksDetail', params: { id: item.id } }"
        >Details</router-link
      >
    </template>
    <p>A list of all the books from the API</p></BaseList
  >
</template>

<script>
import BaseList from "@/components/BaseList.vue";

export default {
  name: "App",
  data() {
    return {
      books: [],
    };
  },
  components: {
    BaseList,
  },
  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.books = await response.json();
  },
};
</script>
