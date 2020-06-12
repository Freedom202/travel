import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) 

export default new Vuex.Store({
    state,   //state: state,
    // actions: {
    //     changeCity (ctx, city) {   //ctx: 上下文
    //        // console.log(city)
    //        ctx.commit('changeCity', city)
    //     }
    // },
    mutations   //mutations: mutations
})