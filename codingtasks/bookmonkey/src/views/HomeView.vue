<template>
  <HelloWorld msg="Welcome to our TrackStack 😉" />
  <TestComp :headline="headline" :your-event-name="doSomething" type="green"
    ><p><span>Some</span> text</p></TestComp
  >
  <BaseList :headline="fruitList.headline" :list-items="fruitList.data">
    <template v-slot:header
      ><h5>{{ fruitList.headline }}</h5></template
    >
    test</BaseList
  >
  <BaseList :headline="attendeeList.headline" :list-items="attendeeList.data">{{
    attendeeList.introText
  }}</BaseList>
  <BaseList headline="All fruits starts with A" :list-items="attendeeList.data"
    >Alle Früchte die mit <strong>A</strong></BaseList
  >
  <BaseList headline="All fruits with emoji" :list-items="fruitList.data"
    ><template #list-item="scopedData"
      >{{ scopedData.item.text }} - {{ scopedData.item.emoji }}</template
    >Früchte mit Emoji in einer Liste</BaseList
  >

  <b>Other heading</b>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TestComp from "@/components/TestComp.vue";
import BaseList from "@/components/BaseList.vue";

export default {
  name: "App",
  data() {
    return {
      headline: "Jajajajaja2",
      books: [],
      fruitList: {
        headline: "Fruits",
        introText: "A <span>list</span> of available fruits",
        data: [
          {
            id: 41,
            text: "Apple",
            emoji: "🍏",
          },
          {
            id: 42,
            text: "Melon",
            emoji: "🍉",
          },
        ],
      },
      attendeeList: {
        headline: "Bootcamp Attendees",
        introText: "A list of bootcamp attendees in 2022",
        data: [
          {
            id: 2,
            age: 44,
            text: "Werner",
          },
          {
            id: 3,
            age: 46,
            text: "Melanie",
          },
        ],
      },
    };
  },
  components: {
    HelloWorld,
    TestComp,
    BaseList,
  },
  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.books = await response.json();
  },
};
</script>
