const app = Vue.createApp({
  data: function () {
    return {
      title: "Herzlich! Willkommen!",
      unsavedChangesCounter: 0,
    };
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    },
  },
  methods: {
    resetInput() {
      this.title = "";
    },
  },
  watch: {
    title() {
      this.unsavedChangesCounter++;
    },
  },
});

app.mount("#app");
