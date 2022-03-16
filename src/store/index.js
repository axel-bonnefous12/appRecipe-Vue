import Vue from "vue";
import Vuex from "vuex";
import recipes from "./modules/recipes.js";
import login from "./modules/login.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogged: false
  },
  modules: {
    recipes,
    login
  },
  plugins: [createPersistedState()]
});
export default store;
