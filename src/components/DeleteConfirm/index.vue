<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are you want to delete?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="cancel">Close</button>
            <button type="button" class="btn btn-danger" @click="handleDeleteStation(id)" >Yes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ "id" ],
  methods: {
    handleDeleteStation(id) {
      this.$refs.cancel.click();
      this.$store.dispatch("deleteStation", id)
    }
  }
};
</script>

<style>
</style>