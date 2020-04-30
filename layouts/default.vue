<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  mounted() {
    window.console.log("Defaults layout");
  }
};
</script>

<style lang="scss">
@import "../assets/app";
</style>
