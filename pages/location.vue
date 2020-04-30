<template>
  <v-layout column align-center>
    <img class="location__image" src="/location.png" alt="location" />
    <h1 class="location__header">Where are you located?</h1>
    <v-form class="location__form" lazy-validation>
      <v-text-field
        outlined
        color="green"
        v-model="locationEmail"
        type="email"
        label="email"
        :rules="[rules.email, rules.required]"
      ></v-text-field>
      <v-text-field
        outlined
        color="green"
        v-model="locationPassword"
        type="password"
        label="password"
        :rules="[rules.required]"
      ></v-text-field>
      <button @click.stop.prevent="location" class="btn--cta">location</button>
    </v-form>
    <h3 class="location__note">NOT A MEMBER?</h3>
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
    locationEmail: {
      get() {
        return this.$store.state.locationEmail;
      },
      set(value) {
        this.$store.commit("auth/setlocationEmail", value);
      }
    },
    locationPassword: {
      get() {
        return this.$store.state.locationPassword;
      },
      set(value) {
        this.$store.commit("auth/setlocationPassword", value);
      }
    }
  },
  methods: {
    location() {
      window.console.log("Attempted to location");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/app";

.location {
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
