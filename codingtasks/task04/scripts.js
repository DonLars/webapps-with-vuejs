const app = Vue.createApp({
  data() {
    return {
      activeLetter: "A",
    };
  },
});

app.mount("#app");

/*const app = Vue.createApp({
  data() {
    return {
      activeLetter: "A",
      opacityA: true,
      opacityB: false,
      opacityC: false,
    };
  },
  methods: {
    changeBtn(activeBtn) {
      console.log(activeBtn);
      this.activeLetter = activeBtn;

      if (this.activeLetter === "A") {
        this.opacityA = true;
        this.opacityB = false;
        this.opacityC = false;
      }

      if (this.activeLetter === "B") {
        this.opacityA = false;
        this.opacityB = true;
        this.opacityC = false;
      }
      if (this.activeLetter === "C") {
        this.opacityA = false;
        this.opacityB = false;
        this.opacityC = true;
      }
    },
  },
});

app.mount("#app");
*/
