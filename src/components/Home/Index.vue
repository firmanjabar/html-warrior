<template>
  <div style="background:#ababab">
    <comp-carousel />
    <comp-menu />
  </div>
</template>

<script>
import compCarousel from "./Carousel.vue";
import compMenu from "./Menu.vue";

export default {
  components: {
    compCarousel,
    compMenu
  }
};
</script>

<style>
</style>