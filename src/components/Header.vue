<template>
  <nav>
    <div class="nav-wrapper teal">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <router-link :to="{ name: 'homePage' }"> Home </router-link>
      </ul>
      <span v-if="theJWT"> | <a @click="logout">Logout</a></span>
      <span v-else> | <router-link to="/Login">Login</router-link></span>
    </div>
  </nav>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["logout"]),
    Logout: function () {
      this.logout();
    },
  },
  computed: mapGetters(["theJWT"]),
};
</script>