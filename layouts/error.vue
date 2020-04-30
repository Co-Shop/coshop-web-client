<template>
  <v-app>
    <h1>There was an error :(</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  head() {
    const title = "Error";
    return {
      title
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
