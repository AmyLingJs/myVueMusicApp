import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from "./state";
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default new Vuex.Store({
    state,actions,mutations,getters
})



// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     }

// })


// console.log(store.state.count)
// store.commit("increment")
// console.log(store.state.count)
// store.commit("increment")
// console.log(store.state.count)