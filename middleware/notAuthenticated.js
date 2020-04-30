export default function({ store, redirect }) {
  // Check if auth'd, if so redirect to home
  if (store.state.auth.user && localStorage.getItem("token")) {
    return redirect("/home");
  }
}
