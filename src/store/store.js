import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    loginFlag: true
  },
  mutations: {

    login (state, data) {
      // 变更状态
      this.state.token = data;
      localStorage.setItem('token', data)
    },
    logout () {
      localStorage.removeItem('token');
      this.state.token = '';
      this.state.loginFlag = true;
    },
    changeFlag(state, data) {
      this.state.loginFlag = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
