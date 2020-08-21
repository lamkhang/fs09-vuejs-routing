<template>
  <div class="container">
    <div class="row mx-0">
      <div class="col-sm-10 mx-auto">
        <router-link active-class="active" exact class="btn btn-success my-3" to="/admin/create-station">Create Station</router-link>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Province</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <Loader v-if="loading" />
            <tr v-for="station in stations" :key="station._id">
              <th>{{station.name}}</th>
              <td>{{station.address}}</td>
              <td>{{station.province}}</td>
              <td class="d-flex">
                <router-link class="btn btn-warning rounded-0 mr-2" :to="`/admin/station/${station._id}/edit`">Edit</router-link>
                <button class="btn btn-danger rounded-0" data-toggle="modal" data-target="#deleteModal" @click="id=station._id">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <DeleteConfirm :id="id" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import DeleteConfirm from "./../../../components/DeleteConfirm";
export default {
  components: {
    Loader,
    DeleteConfirm,

  },
  data() {
    return {
      id: ""
    }
  },
  created() {
    this.$store.dispatch("fetchListStations");
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    stations() {
      return this.$store.state.stations.data;
    }
  }
};
</script>

<style>
</style>