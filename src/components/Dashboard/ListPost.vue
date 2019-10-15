<template>
  <div>
    <b-table-simple responsive striped table-variant="dark" hover>
      <b-thead head-variant="light">
        <b-tr>
          <b-th>Title</b-th>
          <b-th>Description</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(post, index) in posts" :key="index">
          <b-th>{{post.title}}</b-th>
          <b-td>{{post.content | truncate(100, '...')}}</b-td>
          <b-td>
            <div @click="deleteHandler(post.id)" class="nav_link nav">
              <custom-icon name="trash-2" base-class="custom-icon"></custom-icon>
            </div>
            <div @click="editHandler(post.id)" class="nav_link nav">
              <custom-icon name="edit" base-class="custom-icon"></custom-icon>
            </div>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <div>
      <b-modal id="modal-1" title="Please Confirm" hide-footer>
        <div class="d-block text-center">
          <p class="my-4">Please confirm that you want to delete this post?</p>
        </div>
        <b-button block variant="danger" class="mt-3" @click="confirmDelete()">Yes I'm Sure</b-button>
        <b-button block variant="primary" class="mt-3" @click="cancelDelete()">Cancel</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import customIcon from "vue-icon/lib/vue-feather.esm";

export default {
  components: {
    customIcon
  },
  data() {
    return {
      baseClass: "v-icon",
      toDelete: ""
    };
  },
  computed: {
    posts() {
      let posts = this.$store.getters["admin/getAdminPost"];
      return posts;
    }
  },
  created() {
    this.$store.dispatch("admin/getAdminPost");
  },
  methods: {
    deleteHandler(id) {
      this.toDelete = id;
      this.$bvModal.show("modal-1");
    },
    confirmDelete() {
      this.$store.dispatch("admin/deletePost", this.toDelete);
      this.$bvModal.hide("modal-1");
    },
    cancelDelete() {
      this.toDelete = "";
      this.$bvModal.hide("modal-1");
    },
    editHandler(id) {}
  }
};
</script>


<style>
.v-icon,
.custom-icon {
  width: 24px;
}
</style>