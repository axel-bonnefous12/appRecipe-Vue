<template>
  <div>
    <h5 align="center ">Login</h5>
    <div class="add">
      <form @submit="onSubmit">
        <p>
          Email
          <input type="text" v-model="email" placeholder="email" />
          Password
          <input type="text" v-model="password" placeholder="password" />
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
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit(event) {
      event.preventDefault();
      const login = { email: this.email, password: this.password };
      this.login(login);

      this.email = "";
      this.password = "";
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