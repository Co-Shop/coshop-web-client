<template>
  <v-layout column align-center>
    <h1 class="signup__header">Sign up to Co-Shop</h1>
    <v-form class="signup__form" lazy-validation>
      <v-text-field outlined v-model="username" :counter="10" label="username" required></v-text-field>
      <v-text-field outlined v-model="email" type="email" label="email" required></v-text-field>
      <v-text-field outlined v-model="password" type="password" label="password" required></v-text-field>
      <button @click="register" class="btn--cta">REGISTER</button>
    </v-form>
    <h3 class="signup__note">Already a member?</h3>
    <nuxt-link to="/login">
      <button class="btn--alt">Log in to your account</button>
    </nuxt-link>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/app";

.signup {
  &__header {
    margin: 10vh 0 5vh 0;
  }

  &__form {
    width: 75vw;
  }

  &__note {
    text-align: center;
    padding: 0 10vw;
    color: gray;
    margin: 5vh 0 0 0;
  }
}

.btn--cta {
  background: $green;
  height: 7vh;
  width: 100%;
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
