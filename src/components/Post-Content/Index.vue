<template>
  <div class="container_content mt-3 mb-3">
    <b-row>
      <b-col md="3">
        <div class="dissapear scroll">
          <b-list-group>
            <b-list-group-item disabled>
              <strong>Daftar Isi</strong>
            </b-list-group-item>
            <router-link
              type="link"
              :to="`/content/${post.id}`"
              v-for="(post,index) in posts"
              :key="index"
              class="['list list_link small']"
            >
              <b-list-group-item
                :class="{'active': activeItemId === post}"
                @click="setActiveItemId(post)"
              >{{post.title}}</b-list-group-item>
            </router-link>
          </b-list-group>
        </div>
      </b-col>
      <b-col md="9">
        <router-view :key="$route.fullPath" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItemId: ""
    };
  },
  methods: {
    setActiveItemId(itemIndex) {
      this.activeItemId = itemIndex;
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/getAllPosts"];
    }
  },
  created() {
    this.$store.dispatch("posts/getAllPosts");
  }
};
</script>

<style>
</style>