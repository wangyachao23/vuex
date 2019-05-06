import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:3
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
    count:function(state){
        return state.count +=100;
    }
}
const modelA={
    state,
    mutations,
    getters
}
export default new Vuex.Store({
    modules:{a:modelA}
})