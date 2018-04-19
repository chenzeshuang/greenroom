import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutation'
let store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store