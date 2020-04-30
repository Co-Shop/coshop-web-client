<template>
  <v-layout column align-center>
    <h1 class="signup__header">Sign up to Co-Shop</h1>
    <v-form class="signup__form" lazy-validation>
      <v-text-field
        outlined
        color="green"
        v-model="registerUsername"
        :counter="10"
        label="username"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        outlined
        color="green"
        v-model="registerEmail"
        type="email"
        label="email"
        :rules="[rules.email, rules.required]"
      ></v-text-field>
      <v-text-field
        outlined
        color="green"
        v-model="registerPassword"
        type="password"
        label="password"
        :rules="[rules.min, rules.required]"
      ></v-text-field>
      <button @click="register" class="btn--cta">REGISTER</button>
    </v-form>
    <h3 class="signup__note">Already a member?</h3>
    <nuxt-link to="/login">
      <button class="btn--alt">Log in to your account</button>
    </nuxt-link>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 6) || "Min 6 characters",
        email: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      }
    };
  },
  computed: {
    registerUsername: {
      get() {
        return this.$store.state.registerUsername;
      },
      set(value) {
        this.$store.commit("auth/setRegisterUsername", value);
      }
    },
    registerEmail: {
      get() {
        return this.$store.state.registerEmail;
      },
      set(value) {
        this.$store.commit("auth/setRegisterEmail", value);
      }
    },
    registerPassword: {
      get() {
        return this.$store.state.registerPassword;
      },
      set(value) {
        this.$store.commit("auth/setRegisterPassword", value);
      }
    }
  },
  methods: {
    register() {
      window.console.log("Attempted to register");
    }
  }
};
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
