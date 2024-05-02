import { defineStore } from "pinia";

export const nameStore = defineStore("store", {
  state: () => ({
    age: 45,
    name: "Herbert",
  }),
  actions: {
    increaseAge() {
      this.age++;
    },
  },
  getters: {
    tooOld: (state) => {
      if (state.age > 50) {
        return "too old";
      } else {
        return "not too old, yet";
      }
    },
  },
});
