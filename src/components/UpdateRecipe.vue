<template>
  <div>
    <h5 align="center ">Add Recipe</h5>
    <div class="add">
      <form @submit="onSubmit">
        <p>
          Name
          <input type="text" v-model="recipe.name" placeholder="name" />
          Steps <input type="text" v-model="recipe.steps" placeholder="steps" />
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "updateRecipe",
  data() {
    return {
      recipe: {
        name: "",
        steps: "",
      },
    };
  },
  methods: {
    ...mapActions(["updateRecipe"]),
    onSubmit(event) {
      event.preventDefault();
      this.updateRecipe(this.recipe);
    },
  },
  created() {
    this.recipe = {
      ...this.$route.params.recipe,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>