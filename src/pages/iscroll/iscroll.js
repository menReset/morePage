import Vue from 'vue';
import App from './App.vue';
import VIscroll from 'viscroll';

Vue.use(VIscroll, {
  mouseWheel: true,
  click: false,
  preventDefault: true,
  tap: false,
  bounce: false,
  disableMouse: false,
  disablePointer: true,
  disableTouch: false,
  fadeScrollbars: true,
})

new Vue({
  el: '#app',
  render: h => h(App)
})