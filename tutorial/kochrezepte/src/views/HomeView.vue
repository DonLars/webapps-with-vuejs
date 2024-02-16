<template>
  <RecipeItem
    :image="recipe.recipe.image"
    :label="recipe.recipe.label"
    :attributes="recipe.recipe.dietLabels.join(', ')"
    :url="recipe.recipe.url"
    v-for="recipe in recipes"
  />
</template>

<script>
import RecipeItem from "@/components/RecipeItem.vue";
export default {
  components: {
    RecipeItem,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    async getRecipes() {
      const query = "curry";
      const appId = "fb4785b3";
      const appKey = "9cf5258768b19b9fe3cee4584d396791";
      const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

      let resp = await fetch(url);
      this.recipes = (await resp.json()).hits;
      console.log(this.recipes);
    },
  },
  mounted() {
    this.getRecipes();
  },
};
</script>
<style></style>
