<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>
    <div class="alert alert-danger" v-if="err">{{err.response.data}}</div>
    <form
      action=""
      class="container w-50 mx-auto"
      @submit.prevent="handleLogin"
    >
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          name="email"
          id="email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="text"
          class="form-control"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
export default {
  components: {
    Loader,
  },
  created() {
    if(this.$store.state.auth.token){
      this.$router.replace("/admin/dashboard");
    }
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    err() {
      return this.$store.state.auth.err;
    },
  },
};
</script>

<style></style>
