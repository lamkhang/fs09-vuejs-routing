<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Create Station</h3>
        <Loader v-if="loading" />
        <div class="alert alert-danger" v-if="err">{{err}}</div>
        <form action="" @submit.prevent="handleCreateStation(formStation)">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" id="name" v-model="formStation.name" />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" name="address" id="address" v-model="formStation.address" />
          </div>
          <div class="form-group">
            <label for="province">Province</label>
            <input type="text" class="form-control" name="province" id="province" v-model="formStation.province" />
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
  data(){
    return{
      formStation: {
        name: "",
        address: "",
        province: ""
      }

    }
  },
  methods: {
    handleCreateStation(formStation) {
      const { name, address, province } = formStation
      this.$store.dispatch("fetchCreateStation", {
        name, address, province
      })
    }
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    err() {
      return this.$store.state.stations.err
    }
  }
};
</script>

<style></style>
