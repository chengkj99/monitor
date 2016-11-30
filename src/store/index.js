import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  modalShow: false,
  modalDetailsShow: false,
  modalRenameShow:false
}

const actions = {
  MODAL_CHANGE_AC ({ commit }) {
    commit('MODAL_CHANGE')
    return Promise.resolve()
  },
  DETAILS_CHANGE_AC({ commit }) {
    commit('DETAILS_CHANGE')
    return Promise.resolve()
  },
  RENAME_CHANGE_AC({ commit }) {
    commit('RENAME_CHANGE')
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
  },
  DETAILS_CHANGE (state) {
    if(state.modalDetailsShow==false){
      state.modalDetailsShow=true;
    }else{
      state.modalDetailsShow=false;
    }
  },
  RENAME_CHANGE (state) {
    if(state.modalRenameShow==false){
      state.modalRenameShow=true;
    }else{
      state.modalRenameShow=false;
    }
  }
  
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
