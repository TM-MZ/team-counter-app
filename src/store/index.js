import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam:'',
  },
  getters: {
  },
  mutations: {
    incrementSum(state, payload) {
      state.sum++;
      state.lastTeam = payload;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
