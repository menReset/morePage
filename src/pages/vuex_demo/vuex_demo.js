import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

  },
  actions: {
    
  },
  mutations: {

  },
  getters: {
    
  }
})

new Vue({
  el: '#app',
  store,
  components:{
    App
  },
  template: '<App/>'
})