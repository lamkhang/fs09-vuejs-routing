<template>
  <div>
    <NavBarAdmin />
    <router-view />
  </div>
</template>

<script>
import NavBarAdmin from "./../../components/NavBarAdmin"
export default {
  components: {
    NavBarAdmin
  }
}
</script>

<style>

</style>