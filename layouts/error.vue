<template>
  <v-app>
    <h1>There was an error :(</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </v-app>
</template>

<script>
export default {
  mounted() {
    window.console.log("Error layout");
  }
};
</script>

<style lang="scss">
</style>
