<template>
  <div id="app" v-iscroll="getIscroll" class="scroll">
    <div>
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
      <div class="box box5"></div>
      <div class="box box6"></div>
      <div class="box box7"></div>
      <div class="box box8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    getIscroll(iscroll) {
      if (iscroll) {
        iscroll.on('scrollStart', function() {
          console.log('scrollStart')
        })
      }
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app{
  height: 100%;
  overflow: hidden;
}
.box{
  height: 200px;
  width: 100%;
}
.box1{
  background-color: pink;
}
.box2{
  background-color: aqua;
}
.box3{
  background-color: bisque;
}
.box4{
  background-color: blue;
}
.box5{
  background-color: yellowgreen;
}
.box6{
  background-color: goldenrod;
}
.box7{
  background-color: palevioletred;
}
.box8{
  background-color: peru;
}
</style>