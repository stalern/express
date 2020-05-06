import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {

    login (state, data) {
      // 变更状态
      this.state.token = data;
    },
    logout () {
      this.state.token = '';
    }
  },
  actions: {
  },
  modules: {
  }
})
