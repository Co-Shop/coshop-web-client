const AJAX = require("../ajax/index");
const { checkAuth, loginAuth, registerAuth } = AJAX;
const authTokenHeader = "x-auth-token";

export const state = () => ({
  // Store user data as object
  user: null,

  // For login component
  loginEmail: "",
  loginPassword: "",

  // For register component
  registerUsername: "",
  registerEmail: "",
  registerPassword: ""
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setLoginEmail(state, payload) {
    state.loginEmail = payload;
  },
  setLoginPassword(state, payload) {
    state.loginPassword = payload;
  },
  setRegisterUsername(state, payload) {
    state.registerUsername = payload;
  },
  setRegisterEmail(state, payload) {
    state.registerEmail = payload;
  },
  setRegisterPassword(state, payload) {
    state.registerPassword = payload;
  }
};

export const actions = {
  async checkUserAuth({ commit, state }) {
    // Only check auth if no current user
    if (state.auth.user) return;
    commit("setAjaxInProgress", true);
    await checkAuth()
      .then(data => {
        window.console.log("data in checkAuth is", data);
      })
      .catch(() => {
        window.console.error("failure in checkAuth");
      })
      .finally(() => {
        commit("setAjaxInProgress", false);
      });
  },

  async submitRegister({ dispatch, commit, state }) {
    const { registerUsername, registerEmail, registerPassword } = state.auth;
    commit("setAjaxInProgress", true);
    await registerAuth(registerUsername, registerEmail, registerPassword)
      .then(async res => {
        // Clear inputs
        commit("setRegisterUsername", "");
        commit("setRegisterEmail", "");
        commit("setRegisterPassword", "");

        // Set token in local storage, checkUserAuth to get user data and verify token
        localStorage.setItem("token", res.token);
        axios.defaults.headers.common[authTokenHeader] = res.token;
        await dispatch("checkUserAuth");
      })
      .catch(() => window.console.log("error in submitRegister"))
      .finally(() => {
        commit("setAjaxInProgress", false);
      });
  },

  async submitLogin({ dispatch, commit, state }) {
    const { loginEmail, loginPassword } = state.auth;
    commit("setAjaxInProgress", true);
    await loginAuth(loginEmail, loginPassword)
      .then(async res => {
        // Clear inputs
        commit("setLoginEmail", "");
        commit("setLoginPassword", "");

        // Set token in local storage, checkUserAuth to get user data and verify token
        localStorage.setItem("token", res.token);
        axios.defaults.headers.common[authTokenHeader] = res.token;
        await dispatch("checkUserAuth");
      })
      .catch(() => window.console.log("error in submitLogin"))
      .finally(() => {
        commit("setAjaxInProgress", false);
      });
  },

  submitLogout({ commit }) {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common[authTokenHeader];
    commit("setUser", null);
  }
};
