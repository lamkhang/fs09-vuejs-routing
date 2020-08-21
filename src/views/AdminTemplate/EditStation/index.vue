<template>
  <div class="container">
    <div class="row">
      <Loader v-if="loading" />
      <div class="col-sm-6 mx-auto" v-if="formStation">
        <h3>Edit Station</h3>
        <form action="" @submit.prevent="handleEditStation(formStation)">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" id="name"  v-model="formStation.name" />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" name="address" id="address"  v-model="formStation.address" />
          </div>
          <div class="form-group">
            <label for="province">Province</label>
            <input type="text" class="form-control" name="province" id="province"  v-model="formStation.province" />
          </div>
          <div class="form-group">
            <button class="btn btn-success rounded-0" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
export default {
  components: {
    Loader
  },
  data() {
    return {
      formStation: {
        name: "",
        address: "",
        province: ""
      }
    }
  },
  created(){
    this.$store.dispatch("fetDetailStations", this.$route.params.id)
  },
  methods: {
    handleEditStation(formStation){
      console.log(formStation)
      this.$store.dispatch("fetchEditStation", {
        _id: this.$route.params.id,
        station: formStation
      })
    }
  },
  computed:{
    stationDetail(){
      return this.$store.state.stations.data;
    },
    loading(){
      return this.$store.state.stations.loading;
    }
  },
  watch: {
    stationDetail(newStation){
      this.formStation = newStation
    }
  }

}
</script>

<style>

</style>