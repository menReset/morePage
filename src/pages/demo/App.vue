<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  created () {
    this.mySandwich('第一个参数','第二个参数');

    this.mySandwich('第一个参数','第二个参数',this.goCallBack);
  },
  mounted () {
    
  },
  methods: {
    goCallBack () {
      console.log('这是被执行的回调函数');
    },
    mySandwich(param1, param2, callback) {
      console.log('这是mySandwich函数  ' + param1 + param2);
      if (callback && typeof(callback) === "function") {  
        callback();  
      }  
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
