Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  computed: {
    mousePosition() {
      return {
        click: this.console,
        mousemove: this.getPosition,
      };
    },
  },
  methods: {
    console(event) {
      //console.log(event);
    },

    getPosition(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    deleteFruit(event) {
      event.target.parentElement.remove();
    },
  },
}).mount("#app");
