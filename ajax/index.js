import axios from "axios";

export default {
  async checkAuth() {
    axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
      "token"
    );

    return axios
      .get("/auth/@me")
      .then(response => {
        return response.data;
      })
      .catch(() => window.console.error("Error checking auth"));
  },

  async loginAuth(email = "", password = "") {
    return axios
      .post("/auth/login", {
        email,
        password
      })
      .then(response => response.data)
      .catch(() => window.console.error("Error checking auth"));
  },

  async registerAuth(username = "", email = "", password = "") {
    return axios
      .post("/auth/register", {
        username,
        email,
        password
      })
      .then(response => response.data)
      .catch(() => window.console.error("Error checking auth"));
  }
};
