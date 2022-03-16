import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import routes from "./router";

//Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  store,
  router: routes
}).$mount("#app");
