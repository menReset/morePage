import Vue from 'vue';
import App from './App.vue';
import 'babel-polyfill';
import axios from 'axios';
import VueRouter from 'vue-router';

import Part1 from './components/part1.vue';
import Part2 from './components/part2.vue';
import Show from './components/show.vue';

Vue.use(VueRouter);
Vue.prototype.$axios = axios.create({
  timeout: 5000 // 请求超时时间
})

const router = new VueRouter({
	routes: [{
    path: '/',
    name: 'part1',
    component: Part1
  },{
    path: '/part1',
    name: 'part1',
    component: Part1
  },{
    path: '/part2',
    name: 'part2',
    component: Part2
  },{
    path: '/show',
    name: 'show',
    component: Show
  }]
});

new Vue({
    el: '#app',
    router,
    template: '<App/>',
		components: { App }
	});

