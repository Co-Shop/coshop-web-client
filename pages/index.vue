<template>
  <v-layout column align-center>
    <h1 class="landing__header">CO-SHOP</h1>
    <img class="landing__image" src="/icon.png" alt="coshop" />
    <h2 class="landing__subheader">The shopping assistant you didn't know you needed</h2>
    <nuxt-link to="/signup">
      <button class="btn--cta">GET STARTED</button>
    </nuxt-link>
    <nuxt-link to="/login">
      <button class="btn--alt">Already a member?</button>
    </nuxt-link>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/app";

.landing {
  &__header {
    margin: 10vh 0 5vh 0;
  }

  &__image {
    border-radius: 50%;
    width: 60vw;
    height: 60vw;
  }

  &__subheader {
    text-align: center;
    padding: 0 10vw;
    margin: 5vh 0;
  }
}

.btn--cta {
  background: $green;
  height: 7vh;
  width: 80vw;
  color: white;
  font-size: 24px;
}

.btn--alt {
  height: 7vh;
  width: 80vw;
  color: $green;
  font-size: 24px;
}
</style>
