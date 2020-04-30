<template>
  <v-layout column align-center>
    <h1 class="login__header">Log in to Co-Shop</h1>
    <v-form class="login__form" lazy-validation>
      <v-text-field
        outlined
        color="green"
        v-model="loginEmail"
        type="email"
        label="email"
        :rules="[rules.email, rules.required]"
      ></v-text-field>
      <v-text-field
        outlined
        color="green"
        v-model="loginPassword"
        type="password"
        label="password"
        :rules="[rules.required]"
      ></v-text-field>
      <button @click.stop.prevent="login" class="btn--cta">LOGIN</button>
    </v-form>
    <h3 class="login__note">NOT A MEMBER?</h3>
    <nuxt-link to="/signup">
      <button class="btn--alt">Get started with Co-Shop</button>
    </nuxt-link>
  </v-layout>
</template>

<script>
export default {
  middleware: "notAuthenticated",
  data() {
    return {
      rules: {
        required: value => !!value || "Required.",
        email: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      }
    };
  },
  computed: {
    loginEmail: {
      get() {
        return this.$store.state.loginEmail;
      },
      set(value) {
        this.$store.commit("auth/setLoginEmail", value);
      }
    },
    loginPassword: {
      get() {
        return this.$store.state.loginPassword;
      },
      set(value) {
        this.$store.commit("auth/setLoginPassword", value);
      }
    }
  },
  methods: {
    login() {
      window.console.log("Attempted to login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/app";

.login {
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

