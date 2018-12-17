<template>
  <div class="homepage">
    <header>
      <div class="expert-info">
        <div class="expert-head left"></div>
        <div class="expert-name-box left">
          <p class="expert-name">我我我</p>
          <span class="expert-lable">7连红</span>
          <span class="expert-lable">近期5中5</span>
        </div>
      </div>
      <p class="expert-tip">专业实力说明一切，连红和命中率说明一切，长期坚持盈利丰厚！</p>
    </header>
    <div class="adept-macth">
      擅长赛事：
      <span>日职联</span>
      <span>英超</span>
      <div class="icon-right"><img src="./assets/icon_right.png" alt=""></div>
    </div>
    <div class="expert-battle">
      <div class="expert-battle-title">
        <span class="icon-chunk"></span>
        专家战绩
        <div class="time-box">
          <span class="time" :class="{'time-less': timeType === 'less'}" @click="chooseTime('less')">近7天</span>
          <span class="time" :class="{'time-center': timeType === 'center'}" @click="chooseTime('center')">近15天</span>
          <span class="time" :class="{'time-more': timeType === 'more'}" @click="chooseTime('more')">近30天</span>
        </div>
      </div>
      <div class="expert-battle-info">
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homepage',
    data () {
      return {
        timeType: 'less'
      }
    },
    created () {
      
    },
    mounted () {
      
    },
    methods: {
      chooseTime (type) {
        if(this.timeType === type){
          return
        }
        this.timeType = type;
        console.log(1111);
      }
    }
  }
</script>

<style lang="less">
@px2rem: 37.5rem;
*{
  padding: 0;
  margin: 0;
}
img{
  display: block;
}
html,body{
  background-color: #ececec;
  min-height: 100%;
}
.left{
  float: left;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.homepage{
  background-color: #ececec;
}
.icon-chunk{
  display: inline-block;
  vertical-align: top;
  width: 10/@px2rem;
  height: 34/@px2rem;
  margin-top: 3/@px2rem;
  background-color: #16b13a;
}
.title-hint{
  font-size: 32/@px2rem;
  color: #333333;
}
header{
  background-color: #333c45;
  padding: 30/@px2rem 0;
  .expert-info{
    height: 125/@px2rem;
    padding-bottom: 30/@px2rem;
    .expert-head{
      width: 125/@px2rem;
      height: 100%;
      border-radius: 50%;
      background-color: red;
      margin: 0 25/@px2rem;
      img{
        width: 100%;
        border-radius: 50%;
      }
    }
    .expert-name-box{
      height: 100%;
      width: 550/@px2rem;
      font-size: 0;
      .expert-name{
        height: 72/@px2rem;
        line-height: 72/@px2rem;
        color: #fff;
        font-size: 34/@px2rem;
      }
      .expert-lable{
        display: inline-block;
        font-size: 24/@px2rem;
        height: 34/@px2rem;
        line-height: 34/@px2rem;
        border-radius: 34/@px2rem;
        margin-right: 10/@px2rem;
        color: #fff;
        padding: 0 12/@px2rem;
        border: 1px solid #fff;
      }
    }
  }
  .expert-tip{
    padding-left: 25/@px2rem;
    color: #949bab;
    font-size: 24/@px2rem;
    clear: both;
  }
}
.adept-macth{
  position: relative;
  height: 40/@px2rem;
  line-height: 40/@px2rem;
  padding: 25/@px2rem;
  color: #333333;
  font-size: 28/@px2rem;
  background-color: #f7f7f7;
  span{
    display: inline-block;
    color: #ec6433;
    font-size: 24/@px2rem;
    height: 32/@px2rem;
    line-height: 32/@px2rem;
    border-radius: 32/@px2rem;
    padding: 0 12/@px2rem;
    border: 1px solid #ec6433;
  }
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
}
.expert-battle{
  padding: 0 25/@px2rem;
  margin-top: 12/@px2rem;
  background-color: #f7f7f7;
  .expert-battle-title{
    font-size: 32/@px2rem;
    height: 40/@px2rem;
    line-height: 40/@px2rem;
    padding: 25/@px2rem 0;
    .time-box{
      float: right;
      width: 360/@px2rem;
      height: 40/@px2rem;
      border: 1px solid #e9e9e9;
      border-radius: 40/@px2rem;
      font-size: 0;
      .time{
        display: inline-block;
        width: 120/@px2rem;
        height: 40/@px2rem;
        line-height: 40/@px2rem;
        font-size: 24/@px2rem;
        color: #888888;
        text-align: center;
      }
      .time-less{
        border-radius: 40/@px2rem 0 0 40/@px2rem;
        background-color: #e9e9e9;
        color: #333333;
      }
      .time-center{
        background-color: #e9e9e9;
        color: #333333;
      }
      .time-more{
        border-radius: 0 40/@px2rem 40/@px2rem 0;
        background-color: #e9e9e9;
        color: #333333;
      }
    }
  }
  .expert-battle-info{
    width: 100%;
    display: table;
    height: 120/@px2rem;
    border-bottom: 1px solid #e9e9e9;
  }
}
</style>

