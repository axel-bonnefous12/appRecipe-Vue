import { getRecipes } from "@/helpers/apiHelper";
import { deleteRecipe } from "@/helpers/apiHelper";
import { addRecipe } from "@/helpers/apiHelper";
import { updatERecipe } from "@/helpers/apiHelper";

const state = {
  recipes: []
};
const getters = {
  allRecipes: (state) => {
    return state.recipes;
  }
};
const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
  removeRecipe(state, id) {
    state.recipes = state.recipes.filter((recipe) => recipe._id !== id);
  },
  addRecipe(state, newRecipe) {
    state.recipes.unshift(newRecipe);
  },
  updateRecipe(state, updateRecipe) {
    const index = state.recipes.findIndex(
      (recipe) => recipe._id === updateRecipe._id
    );
    if (index !== -1) {
      state.recipes.splice(index, 1, updateRecipe);
    }
  }
};

const actions = {
  initRecipes({ commit }) {
    getRecipes()
      .then(async (response) => {
        const data = await response.data;
        if (response.status === 200) {
          commit("setRecipes", response.data);
        } else {
          return Promise.reject(data);
        }
      })
  },
  deleteRecipe({ commit }, id) {
    deleteRecipe(id).then(async (response) => {
      const data = await response.data;
      if (response.status === 200) {
        commit("removeRecipe", id);
      } else {
        return Promise.reject(data);
      }
    });
  },
  updateRecipe({ commit }, updateRecipe) {
    updatERecipe(updateRecipe._id, updateRecipe).then(async (response) => {
      const data = await response.data;
      if (response.status === 200) {
        commit("updateRecipe", response.data);
      } else {
        return Promise.reject(data);
      }
    });
  },
  addRecipe({ commit }, recipe) {
    addRecipe(recipe)
      .then(async (response) => {
        const data = response.data;
        if (response.status === 201) {
          console.log("Submit Success");
          commit("addRecipe", response.data);
        } else {
          return Promise.reject(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
