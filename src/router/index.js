import Vue from "vue";
import Router from "vue-router";
import Store from "@/store/index";
import Home from "@/components/Home";
import CreateRecipe from "@/components/CreateRecipe";
import UpdateRecipe from "@/components/UpdateRecipe";
import InfoRecipe from "@/components/InfoRecipe";
import Login from "@/components/Login";

const router = new Router({
  routes: [
    {
      name: "homePage",
      component: Home,
      path: "/",
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "addRecipe",
      component: CreateRecipe,
      path: "/Add",
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "editRecipe",
      component: UpdateRecipe,
      path: "/Edit",
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "infoRecipe",
      component: InfoRecipe,
      path: "/Info",
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "Login",
      component: Login,
      path: "/Login"
    }
  ]
});
router.beforeEach((to, from, next) => {
  let session = Store.state.login.jwt;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (Store.isLogged === false) {
      console.log(session);
      next({ name: "Login" });
    } else {
      console.log(session);
      next(); // go to wherever I'm going
    }
  } else {
    console.log(session);
    next(); // does not require auth, make sure to always call next()!
  }
});
Vue.use(Router);

export default router;
