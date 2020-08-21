<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Navbar</a>

    <!-- Toggler/collapsibe Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link active-class="active" exact class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <button class="btn btn btn-secondary rounded-0" @click="$store.dispatch('logout')">Logout</button>
        </li>
        <li class="nav-item" >
          <router-link active-class="active" exact class="nav-link" to="/admin/station">Station</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style >
.active {
  background-color: white;
  color: red !important;
}
</style>

