<template>
  <b-card>
    <div class="text-dark data" v-if="content" v-html="content.content"></div>
  </b-card>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.getters["posts/getContent"];
    }
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("posts/getContent", id);
  },
  destroyed() {
    this.$store.commit("posts/clearContent");
  }
};
</script>

<style>
</style>