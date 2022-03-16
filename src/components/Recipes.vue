<template>
  <div>
    <h3>All recipes here</h3>
    <router-link
      :to="{ name: 'addRecipe' }"
      tag="button"
      class="btn btn-sm btn btn-outline-info"
    >
      Add Recipe
    </router-link>
    <div>
      <Recipe v-for="recipe in allRecipes" :key="recipe._id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import Recipe from "@/components/Recipe";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Recipe,
  },
  name: "Recipes",
  methods: {
    ...mapActions(["initRecipes"]),
  },
  computed: mapGetters(["allRecipes"]),
  created() {
    this.initRecipes();
  },
};
</script>

