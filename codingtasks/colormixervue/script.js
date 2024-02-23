"use strict";

Vue.createApp({
  data() {
    return {
      red: "150",
      green: "180",
      blue: "20",
    };
  },
  computed: {
    rgb() {
      return `rgb(${this.red},${this.green},${this.blue})`;
    },
  },
}).mount("#app");
