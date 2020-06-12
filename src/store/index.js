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
    // getters: {    //类似于计算属性。在home/header.vue中header-right使用
    //     doubleCity (state) {
    //         return state.city + ' ' + state.city
    //     }
    // },
    mutations   //mutations: mutations
})