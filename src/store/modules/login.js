import axios from "axios";
import store from "@/store/index";

const state = {
  jwt: "",
  login: {
    email: "",
    password: ""
  }
};
const getters = {
  theJWT: (state) => {
    return state.jwt;
  }
};
const mutations = {
  updateJWT(state, jwt) {
    state.jwt = jwt;
  },
  updateLogin(state, login) {
    state.login.email = login.email;
    state.login.password = login.password;
  }
};
const actions = {
  async login({ commit }, login) {
    await axios
      .post("https://app-recipe-apidae.herokuapp.com/Login", login)
      .then((response) => {
        if (response.status === 200) {
          commit("updateJWT", response.data.jwt);
          commit("updateLogin", login);
          store.isLogged = true;
        } else {
          return Promise.reject(response.statusText);
        }
      });
  },
  async logout({ commit }) {
    const newLog = {
      email: "",
      password: ""
    };
    commit("updateLogin", newLog);
    commit("updateJWT", null);
    store.isLogged = false;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
