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
}).mount("#app");

/*
In this task we use the Event Handling of vueJS.

Add a mousemove event to the div container and update
 Update the data properties x and y with the current coordinates of the mouse position.
offsetX and offsetY will be your friend
 Ensure that the coordinates getting displayed on the screen.
 There is a red dead spot in the middle of the area. The coordinates should not get updated when mouse moves over the spot.
A modifier could help you to solve that issue.
*/

/*
Given is a list of fruits but the remove button is not working yet.
 Make the remove button work.
 Take use of v-on directive and methods.

*/
