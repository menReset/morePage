<template>
  <div id="app">
    <div class="video">
      <video
        class="video-component"
        ref="videoElement"
        controls
        autoplay
      >Your browser is too old which doesn't support HTML5 video.</video>
    </div>
  </div>
</template>

<script>
import flvjs from "flv.js";
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  created () {
    
  },
  mounted () {
    this.$nextTick(() => {
      this.createVideo();
    });
  },
  methods: {
    createVideo() {
      const videoElement = this.$refs.videoElement;
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://live-hdl.dongqiudi.com/dongqiudi/ccee676eab57294258cb5e4c412dc087.flv'
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.video{
  width: 100%;
}
video{
  width: 100%;
}
</style>
