export const state = () => ({
  // Loading boolean for spinners
  ajaxInProgress: false
});

export const mutations = {
  setAjaxInProgress(state, payload) {
    state.ui.ajaxInProgress = payload;
  }
};
