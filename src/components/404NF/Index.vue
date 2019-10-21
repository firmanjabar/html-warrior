<template>
  <div class="container mt-2">
    <b-card
      :img-src="bck"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 100%;"
      class="mb-2"
    ></b-card>
  </div>
</template>

<script>
import NotFOund from "../../assets/images/featured/404.svg";

export default {
  data() {
    return {
      bck: NotFOund
    };
  }
};
</script>

<style>
</style>