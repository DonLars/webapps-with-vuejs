<template>
  <a :href="url" class="recipeItemContainer">
    <img class="recipe-image" :src="image" />
    <div class="right-side">
      <div>{{ label }}</div>
      <div class="bottom-row">
        {{ attributes }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "RecipeItem",
  props: {
    image: String,
    label: String,
    attributes: String,
    url: String,
  },
};
</script>

<style scoped>
.recipeItemContainer {
  border: 1px solid #222;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
}
.recipeItemContainer:hover {
  background: #eee;
}
.recipe-image {
  height: 60px;
}

.bottom-row {
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
}
.right-side {
  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
}
</style>
