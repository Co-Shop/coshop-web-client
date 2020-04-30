export default function({ store, redirect }) {
  // Check if not auth'd, if so redirect to landing
  if (!store.state.auth.user || !localStorage.getItem("token")) {
    return redirect("/landing");
  }
}
