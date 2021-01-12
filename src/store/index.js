import { createStore } from "vuex";

export default createStore({
  state: {
    isDestroyed: false
  },
  mutations: {
    destroyed(state) {
      // изменяем состояние
      state.isDestroyed = true;
    }
  },
  actions: {},
  modules: {}
});
