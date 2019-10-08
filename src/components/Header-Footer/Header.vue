<template>
  <header>
    <div class="header_container">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <div class="container">
          <b-navbar-brand>
            <app-button :addClass="['logo logo_link small']" type="link" linkTo="/">Html Warriors</app-button>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <div v-if="!isAuth">
                <b-nav-item>
                  <router-link to="/signin">
                    <img :src="require('../../assets/images/login.png')" />
                  </router-link>
                </b-nav-item>
              </div>

              <div v-if="isAuth">
                <b-nav-item>
                  <router-link class="nav_link nav" to="/dashboard">
                    <custom-icon name="grid" base-class="custom-icon"></custom-icon>
                    <span>&nbsp;Dashboard</span>
                  </router-link>
                </b-nav-item>
                <b-nav-item>
                  <div @click="logoutUser" class="nav_link nav">
                    <custom-icon name="log-out" base-class="custom-icon"></custom-icon>
                    <span>&nbsp;Logout</span>
                  </div>
                </b-nav-item>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import customIcon from "vue-icon/lib/vue-feather.esm";

export default {
  components: {
    customIcon
  },
  data() {
    return {
      baseClass: "v-icon"
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters["admin/isAuth"];
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit("admin/logoutUser");
    }
  }
};
</script>

<style>
.v-icon,
.custom-icon {
  width: 18px;
}
</style>