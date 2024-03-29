import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   render(h){
//     return h(App)
//   }
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   components:{
//     App
//   },
//   template: '<App/>'
// })