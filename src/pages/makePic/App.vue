<template>
  <div class="makePic">
    <transition name="fade">
      <div class="paper-con">
        <img class="paper" v-if="hideLoading" :src="paperHistory">
        <img class="paper-loading" v-else src="./assets/loading.gif">
      </div>
    </transition>
  </div>
</template>

<script>
  import makePaper from './assets/makePaper.js'
  export default {
    name: 'makePic',
    data () {
      return{
        paperHistory: '',
        hideLoading: false,
        backUrl: 'https://activity-static.dongqiudi.com/2018/leaderboard/000.jpg',
        leaderboard:[
          {"id":"50000516","flag":"https://activity-static.dongqiudi.com/team/50000516.png","name":"利物浦"},
          {"id":"50000514","flag":"https://activity-static.dongqiudi.com/team/50000514.png","name":"切尔西"},
          {"id":"50000529","flag":"https://activity-static.dongqiudi.com/team/50000529.png","name":"曼城"},
          {"id":"50000513","flag":"https://activity-static.dongqiudi.com/team/50000513.png","name":"阿森纳"},
          {"id":"50000515","flag":"https://activity-static.dongqiudi.com/team/50000515.png","name":"曼联"},
          {"id":"50000528","flag":"https://activity-static.dongqiudi.com/team/50000528.png","name":"托特纳姆热刺"},
          {"id":"50000564","flag":"https://activity-static.dongqiudi.com/team/50000564.png","name":"伯恩茅斯"},
          {"id":"50000556","flag":"https://activity-static.dongqiudi.com/team/50000556.png","name":"布莱顿"},
          {"id":"50000551","flag":"https://activity-static.dongqiudi.com/team/50000551.png","name":"伯恩利"},
          {"id":"50000532","flag":"https://activity-static.dongqiudi.com/team/50000532.png","name":"水晶宫"},
          {"id":"50000527","flag":"https://activity-static.dongqiudi.com/team/50000527.png","name":"埃弗顿"},
          {"id":"50000549","flag":"https://activity-static.dongqiudi.com/team/50000549.png","name":"沃特福德"},
          {"id":"50000535","flag":"https://activity-static.dongqiudi.com/team/50000535.png","name":"莱斯特城"},
          {"id":"50000544","flag":"https://activity-static.dongqiudi.com/team/50000544.png","name":"卡迪夫城"},
          {"id":"50000520","flag":"https://activity-static.dongqiudi.com/team/50000520.png","name":"富勒姆"},
          {"id":"50000579","flag":"https://activity-static.dongqiudi.com/team/50000579.png","name":"哈德斯菲尔德"},
          {"id":"50000537","flag":"https://activity-static.dongqiudi.com/team/50000537.png","name":"西汉姆联"},
          {"id":"50000533","flag":"https://activity-static.dongqiudi.com/team/50000533.png","name":"狼队"},
          {"id":"50000517","flag":"https://activity-static.dongqiudi.com/team/50000517.png","name":"纽卡斯尔联"},
          {"id":"50000523","flag":"https://activity-static.dongqiudi.com/team/50000523.png","name":"南安普顿"}
        ],
        lastboard:{
          leaderboard:[
            {"id":"50000516","flag":"https://activity-static.dongqiudi.com/team/50000516.png","name":"利物浦"},
            {"id":"50000514","flag":"https://activity-static.dongqiudi.com/team/50000514.png","name":"切尔西"},
            {"id":"50000529","flag":"https://activity-static.dongqiudi.com/team/50000529.png","name":"曼城"},
            {"id":"50000513","flag":"https://activity-static.dongqiudi.com/team/50000513.png","name":"阿森纳"},
            {"id":"50000515","flag":"https://activity-static.dongqiudi.com/team/50000515.png","name":"曼联"},
            {"id":"50000528","flag":"https://activity-static.dongqiudi.com/team/50000528.png","name":"托特纳姆热刺"},
            {"id":"50000564","flag":"https://activity-static.dongqiudi.com/team/50000564.png","name":"伯恩茅斯"},
            {"id":"50000556","flag":"https://activity-static.dongqiudi.com/team/50000556.png","name":"布莱顿"},
            {"id":"50000551","flag":"https://activity-static.dongqiudi.com/team/50000551.png","name":"伯恩利"},
            {"id":"50000532","flag":"https://activity-static.dongqiudi.com/team/50000532.png","name":"水晶宫"},
            {"id":"50000527","flag":"https://activity-static.dongqiudi.com/team/50000527.png","name":"埃弗顿"},
            {"id":"50000549","flag":"https://activity-static.dongqiudi.com/team/50000549.png","name":"沃特福德"},
            {"id":"50000535","flag":"https://activity-static.dongqiudi.com/team/50000535.png","name":"莱斯特城"},
            {"id":"50000544","flag":"https://activity-static.dongqiudi.com/team/50000544.png","name":"卡迪夫城"},
            {"id":"50000520","flag":"https://activity-static.dongqiudi.com/team/50000520.png","name":"富勒姆"},
            {"id":"50000579","flag":"https://activity-static.dongqiudi.com/team/50000579.png","name":"哈德斯菲尔德"},
            {"id":"50000537","flag":"https://activity-static.dongqiudi.com/team/50000537.png","name":"西汉姆联"},
            {"id":"50000533","flag":"https://activity-static.dongqiudi.com/team/50000533.png","name":"狼队"},
            {"id":"50000517","flag":"https://activity-static.dongqiudi.com/team/50000517.png","name":"纽卡斯尔联"},
            {"id":"50000523","flag":"https://activity-static.dongqiudi.com/team/50000523.png","name":"南安普顿"}
          ],
          myboardTime: "2018.11.24",
          nickname: "不愿透露姓名的懂球帝"
        }
      }
    },
    created () {
      this.$axios.get('/league/rank?league=34').then(res => {
        console.log(res.data);
      })
      let dataTmp = {
        nickname: this.lastboard.nickname,
        myboardTime: this.lastboard.myboardTime,
        leaderboard: this.lastboard.leaderboard,
        backUrl: this.backUrl
      }
      this.paperHistory = makePaper(dataTmp, '18/19英超')
      console.log(this.paperHistory);
      let picTmp = new Image()
      picTmp.src = this.paperHistory
      picTmp.onload = () => {
        this.hideLoading = true;
      }
    },
    mounted () {
      
    },
    methods: {

    }
  }
</script>

<style lang="less">
@px2rem: 37.5rem;
.paper-con {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000;
  z-index: 1000;
  overflow: auto;
  .paper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin: auto;
  }
  .paper-loading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 40 / @px2rem;
    margin: auto;
  }
}
/* 动画样式  渐隐*/
.fade-enter-active {
  transition: opacity 0.4s;
}

.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

