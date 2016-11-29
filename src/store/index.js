import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  modalShow:true
}

const actions = {
  MODAL_CHANGE_AC ({ commit }) {
    commit('MODAL_CHANGE')
    return Promise.resolve()
  }
}

const mutations = {

  MODAL_CHANGE (state) {
    if(state.modalShow==false){
      state.modalShow=true;
    }else{
      state.modalShow=false;
    }
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
