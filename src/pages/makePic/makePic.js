import Vue from 'vue'
import App from './App'
import axios from 'axios'
import 'babel-polyfill'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: 'https://go-biz.dongqiudi.com',
  timeout: 5000,
  headers: {
    'UUID': globalParams.UUID,
    'Authorization': globalParams.Authorization || '', // 登陆信息
    // Code: globalParams.code
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})