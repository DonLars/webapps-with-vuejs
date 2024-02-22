Vue.createApp({
  data() {
    return {
      text: "Hello Title",
      onClassName: "is-active",
      switchTextOn: "Turn the lights off!",
      switchTextOff: "Turn the lights on!",
    };
  },

  methods: {
    switchOnOff() {
      document.title = this.text;
      document.body.classList.add(this.onClassName);

      document.title = this.text;
      document.body.classList.add(this.onClassName);

      const background = document.querySelector("body");
      const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        if (!background.classList.contains("body-dark")) {
          background.classList.toggle("body-dark");
          btn.classList.add("dark");
          btn.innerText = "Turn the lights on!";
          document.title = "Good Night";
        } else {
          background.classList.toggle("body-dark");
          btn.classList.remove("dark");
          btn.innerText = "Turn the lights off!";
          document.title = "Good Morning";
        }
      });
    },
  },
}).mount("#app");
