<template>
  <div>
    <NavBarHome />
    <router-view />
    </div>
</template>

<script>
import NavBarHome from "./../../components/NavBarHome"
export default {
  components: {
    NavBarHome
  }
}
</script>

<style>

</style>