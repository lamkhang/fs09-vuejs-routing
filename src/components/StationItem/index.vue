<template>
  <div class="col-sm-4" >
        <div class="card" >
          <!-- <img class="card-img-top" src="holder.js/100px180/" alt=""> -->
          <div class="card-body">
            <h4 class="card-title">{{station.name}}</h4>
            <router-link class="btn btn-info" :to="`/station/${station._id}`">Detail</router-link>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: [ "station" ]
}
</script>

<style>

</style>