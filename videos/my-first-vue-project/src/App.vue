<template>
  <layout-header />
  <book-list-row />
  <book-list />
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import BookList from "./components/BookList.vue";
import BookListRow from "./components/BookListRow.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    BookList,
    BookListRow,
  },
};
</script>

<style>
@import url("./assets/global.css");
</style>
