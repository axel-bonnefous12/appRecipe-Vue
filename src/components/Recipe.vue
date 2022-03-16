<template>
  <tr>
    <td>
      <div class="row">
        <div class="col s12">
          <span class="flow-text"
            ><div>{{ recipe.name }}</div></span
          >
        </div>
        <div class="col s6 offset-s6">
          <span class="flow-text">
            <router-link
              :to="{ name: 'editRecipe', params: { recipe: recipe } }"
              tag="button"
              class="btn btn-sm btn btn-outline-warning"
              >Edit</router-link
            >
            <button
              type="button"
              class="btn btn-sm btn btn-outline-danger"
              v-on:click="deleteRecipe(recipe._id)"
            >
              Delete
            </button>
            <router-link
              :to="{ name: 'infoRecipe', params: { recipe: recipe } }"
              tag="button"
              class="btn btn-sm btn btn-outline-info"
              >Info</router-link
            >
          </span>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["deleteRecipe"]),
  },

  props: ["recipe"],
};
</script>