import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: null
  },
  getters: {
  },
  mutations: {
    AUTH_USUARIO(state, usuario){
      state.usuario = usuario
    },
    CLEAR_USER(state){
      state.usuario = null;
    },

  },
  actions: {
  },
  modules: {
  }
})
