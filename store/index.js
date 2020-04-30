import Vue from "vue";
import Vuex from "vuex";
import AJAX from "../ajax/index";
import axios from "axios";

const { checkAuth, loginAuth, registerAuth } = AJAX;

Vue.use(Vuex);
const authTokenHeader = "x-auth-token";

export default new Vuex.Store({
  state: {
    user: null,

    ui: {
      // Loading boolean
      ajaxInProgress: false,

      // For navigation drawer
      showDrawer: false,

      // For login component
      loginEmail: "",
      loginPassword: "",

      // For register component
      registerName: "",
      registerEmail: "",
      registerPassword: ""
    },

    apiData: {
      // products, stores, etc.
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = Vue.set(this.state, "user", payload);
    },
    setLoginEmail(state, payload) {
      state.ui.loginEmail = payload;
    },
    setLoginPassword(state, payload) {
      state.ui.loginPassword = payload;
    },
    setRegisterName(state, payload) {
      state.ui.registerName = payload;
    },
    setRegisterEmail(state, payload) {
      state.ui.registerEmail = payload;
    },
    setRegisterPassword(state, payload) {
      state.ui.registerPassword = payload;
    },
    setAjaxInProgress(state, payload) {
      state.ui.ajaxInProgress = payload;
    }
  },
  actions: {
    async checkUserAuth({ commit, state }) {
      // Only check auth if no current user
      if (state.user) return;
      commit("setAjaxInProgress", true);
      checkAuth()
        .then(data => {
          if (!data.user) {
            window.console.error("Failure getting user data");
            commit("setUser", null);
          } else {
            commit("setUser", { ...data.user });
          }
        })
        .catch(() => {
          window.console.error("Failure getting user data");
        })
        .finally(() => {
          commit("setAjaxInProgress", false);
        });
    },

    async submitRegister({ dispatch, commit, state }) {
      const { registerName, registerEmail, registerPassword } = state.ui;
      commit("setAjaxInProgress", true);

      return new Promise((resolve, reject) =>
        registerAuth(registerName, registerEmail, registerPassword)
          .then(async response => {
            // Clear inputs
            commit("setRegisterName", "");
            commit("setRegisterEmail", "");
            commit("setRegisterPassword", "");
            commit("setRegisterLocation", null);
            if (response.response) {
              // There is an error
              reject(errorUnwrapper(response));
            } else {
              // Set JWT in local storage, checkUserAuth to get user data and verify token
              localStorage.setItem("token", response.token);
              axios.defaults.headers.common[authTokenHeader] = response.token;
              await dispatch("checkUserAuth");
              resolve();
            }
          })
          .finally(() => {
            commit("setAjaxInProgress", false);
          })
      );
    },

    async submitLogout({ commit }) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common[authTokenHeader];
      commit("setUser", null);
    }
  }
});
