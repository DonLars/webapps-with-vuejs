Vue.createApp({
  data() {
    return {
      isDarkMode: false,
      switchTextOn: "Turn the lights off!",
      switchTextOff: "Turn the lights on!",
    };
  },
  computed: {
    switchText() {
      if (this.isDarkMode) {
        return this.switchTextOn;
      } else {
        return this.switchTextOff;
      }
    },
  },
  methods: {
    switchOnOff() {
      const background = document.querySelector("body");
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        background.classList.add("body-dark");
        document.title = "Good Night";
      } else {
        background.classList.remove("body-dark");
        document.title = "Good Morning";
      }
    },
  },
}).mount("#app");
