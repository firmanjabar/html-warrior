<template>
  <div>
    <router-link v-if="type == 'link'" :to="linkTo" :class="['button_default',...addClass]">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["linkTo", "addClass", "type"]
};
</script>

<style>
</style>