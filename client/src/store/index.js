import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    link: null
  },
  mutations: {
    SET_LINK(state, payload) {
      state.link = payload.number;
    }
  },
  actions: {
    GET_LINK: async (context, number) => {
      const response = await fetch(
        "https://polar-dusk-25960.herokuapp.com/users",
        {
          method: "POST",
          body: JSON.stringify({ number })
        }
      );
      context.commit("SET_LINK", response.json());
    }
  },
  modules: {}
});
