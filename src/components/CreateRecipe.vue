<template>
  <div>
    <h5 align="center ">Add Recipe</h5>
    <div class="add">
      <form @submit="onSubmit">
        <p>
          Name
          <input type="text" v-model="name" placeholder="name" />
          Steps
          <input type="text" v-model="steps" placeholder="steps" />
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddRecipe",
  data() {
    return {
      name: "",
      steps: "",
    };
  },
  methods: {
    ...mapActions(["addRecipe"]),
    onSubmit(event) {
      event.preventDefault();
      const recipe = { name: this.name, steps: this.steps };
      this.addRecipe(recipe);

      this.name = "";
      this.steps = "";
    },
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