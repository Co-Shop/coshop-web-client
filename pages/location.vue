<template>
  <v-layout column justify-center align-center>
    <h1>CO-SHOP</h1>
    <img src="/icon.png" alt="coshop" />
    <h3>The shopping assistant you didn't know you needed</h3>
    <v-btn class="btn--cta" nuxt to="/signup">Get Started</v-btn>
    <v-btn class="btn--alt">Already a member?</v-btn>
  </v-layout>
</template>

<script>
export default {
  mounted() {
    window.console.log("landing page");
  }
};
</script>

<style lang="sass" scoped>
</style>
