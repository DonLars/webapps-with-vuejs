<template>
  <layout-header />
  <book-list-row />
  <book-list />
  <h1>Attendee Counters</h1>

  <h2>Total count: {{ totalCount }}</h2>
  <AttendeeCounter
    v-for="({ text, counter }, index) of attendeeCounters"
    :key="text"
    :text="text"
    :counter="counter"
    @increase="handleIncrease(index)"
    @decrease="handleDecrease(index)"
  />
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import BookList from "./components/BookList.vue";
import BookListRow from "./components/BookListRow.vue";
import AttendeeCounter from "./components/AttendeeCounter.vue";

export default {
  name: "App",
  data() {
    return {
      attendeeCounters: [
        {
          text: "5-12 years",
          counter: 0,
        },
        {
          text: "12-18 years",
          counter: 0,
        },
        {
          text: "18-30 years",
          counter: 0,
        },
        {
          text: "50 > years",
          counter: 0,
        },
      ],
    };
  },
  computed: {
    totalCount() {
      let totalCount = 0;
      this.attendeeCounters.forEach(({ counter }) => (totalCount += counter));
      return totalCount;
    },
  },
  components: {
    LayoutHeader,
    BookList,
    BookListRow,
    AttendeeCounter,
  },
  emits: ["handleIncrease", "handleDecrease"],
  methods: {
    handleIncrease(index) {
      //console.log(this.attendeeCounters[index]);
      this.attendeeCounters[index].counter += 1;
    },
    handleDecrease(index) {
      //console.log(this.attendeeCounters[index]);
      this.attendeeCounters[index].counter -= 1;
    },
  },
};
</script>

<style>
@import url("./assets/global.css");
</style>
