<template>
  <div>
    <h5 align="center ">{{ recipe.name }}</h5>
    <div>
      <p>Steps:</p>
      <p>{{ recipe.steps }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoRecipe",
  data() {
    return {
      recipe: {
        name: "",
        steps: "",
      },
    };
  },
  created() {
    this.recipe = {
      ...this.$route.params.recipe,
    };
  },
};
</script>