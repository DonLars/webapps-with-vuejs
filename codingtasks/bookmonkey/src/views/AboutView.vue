<template>
  <div class="about">
    <HelloWorld msg="Headline 😉" />
    <TestComp :headline="headline" :your-event-name="doSomething" type="green"
      ><p><span>Some</span> text</p></TestComp
    >
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TestComp from "@/components/TestComp.vue";

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
  },
  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.books = await response.json();
  },
};
</script>
