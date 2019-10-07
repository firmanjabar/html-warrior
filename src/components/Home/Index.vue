<template>
  <div style="background:#ababab">
    <comp-carousel />
    <comp-content />
  </div>
</template>

<script>
import compCarousel from "./Carousel.vue";
import compContent from "./Content.vue";

export default {
  components: {
    compCarousel,
    compContent
  }
};
</script>

<style>
</style>