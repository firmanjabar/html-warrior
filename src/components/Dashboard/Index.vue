<template>
  <div class="container dashboard_container">
    <div class="mt-3">
      <b-button-group class="center">
        <b-button size="lg" variant="primary">
          <router-link class="dash_link dash" to="/dashboard/add_posts">Add Post</router-link>
        </b-button>
        <b-button size="lg" variant="info">
          <router-link class="dash_link dash" to="/dashboard/manage_posts">Manage Post</router-link>
        </b-button>
      </b-button-group>
    </div>
    <div class="block_static"></div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>