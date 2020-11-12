import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);
import commonActions from './actions/actions'
import apiRequests from './actions/api_requests'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions ={...commonActions,...apiRequests}

let store = new Vuex.Store ({
    state :{
        products:[],
        cart:[]
    },
    mutations,
    actions,
    getters
});

export default store;

