<template>
  <div id="main">
    <transition name="fade">
    	<router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

};
</script>

<style>
  html, body, #main{
    background-color: #1d1325;
    height: 100%;
    width: 100%;        
  }
  p{
    padding: 0;
    margin: 0;
  }
  body{
    font-family: sans-serif;
  }
  img{
    display: block;
  }
  ul,li{
    list-style: none;
  }
  /* 动画样式  渐隐*/
  .fade-enter-active {
  	transition: opacity 1s;
  }
  .fade-enter,
  .fade-leave-to {
  	opacity: 0;
  }
  .fade3-enter-active,
  .fade3-leave-active {
  	transition: opacity 1s;
  }
</style>
