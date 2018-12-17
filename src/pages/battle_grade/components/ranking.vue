<template>
  <div class="ranking">
    <div class="expert-box" v-for="(items,index) in tabRank" :key="index">
      <span class="icon-right"><img src="../assets/icon_right.png" alt=""></span>
      <div class="rank-icon left">
        <span v-if="index === 0"><img :src="oneImg" alt=""></span>
        <span v-if="index === 1"><img :src="twoImg" alt=""></span>
        <span v-if="index === 2"><img :src="threeImg" alt=""></span>
        <span v-else-if="index > 2">{{index + 1}}</span>
      </div>
      <div class="rate-box left">
        <p class="rate">{{items.rate}}<span>%</span></p>
        <p class="rate-title">{{items.rate_title}}</p>
      </div>
      <div class="expert-head left">
        <span><img :src="items.logo" alt=""></span>
      </div>
      <div class="expert-name-box left">
        <div class="expert-name">
          <p>{{items.name}}</p>
          <span v-if="items.competition" class="expert-lable">{{items.competition}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import oneImg from '../assets/rank_one.png';
  import twoImg from '../assets/rank_two.png';
  import threeImg from '../assets/rank_three.png';
  export default {
    name: 'ranking',
    props: ['tabRank'],
    data () {
      return {
        oneImg,twoImg,threeImg,
      }
    },
    created () {
      console.log(this.tabRank);
    },
    mounted () {
      
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
@px2rem: 37.5rem;
.left{
  float: left;
}
.expert-box{
  position: relative;
  height: 140/@px2rem;
  border-bottom: 1px solid #ededed;
  .icon-right{
    position: absolute;
    right: 30/@px2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 16/@px2rem;
    height: 28/@px2rem;
    img{
      width: 100%;
    }
  }
  .rank-icon{
    position: relative;
    width: 85/@px2rem;
    height: 100%;
    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      height: 37/@px2rem;
      line-height: 37/@px2rem; 
      text-align: center;
      font-size: 32/@px2rem;
      color: #888888;
      img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
      }
    }
  }
  .rate-box{
    text-align: center;
    width: 160/@px2rem;
    height: 100%;
    color: #e0371b;
    .rate{
      font-size: 50/@px2rem;
      line-height: 1;
      margin-top: 40/@px2rem;
      font-weight: bolder;
      span{
        font-size: 20/@px2rem;
        font-weight: 200;
      }
    }
    .rate-title{
      font-size: 24/@px2rem;
      line-height: 1;
      transform: scale(.8);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .expert-head{
    position: relative;
    width: 60/@px2rem;
    height: 100%;
    span{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 60/@px2rem;
      height: 60/@px2rem;
      border-radius: 50%;
      img{
        width: 100%;
        border-radius: 50%;
      }
    }
  }
  .expert-name-box{
    position: relative;
    margin-left: 20/@px2rem;
    width: 320/@px2rem;
    height: 100%;
    color: #333333;
    font-size: 32/@px2rem;
    .expert-name{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .expert-lable{
        display: inline-block;
        height: 38/@px2rem;
        color: #4682c4;
        font-size: 24/@px2rem;
        padding: 0 12/@px2rem;
        box-sizing: border-box;
        border: 1px solid #4682c4;
        border-radius: 38/@px2rem;
      }
    }
  }
}

</style>


