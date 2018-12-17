<template>
  <div class="battle">
    <div class="battle-tab">
      <div @click="chooseTab(index)" class="options-tab" :class="{'choose-tab': index === tabIndex}" v-for="(items,index) in rankData" :key="index">
        {{items.title}}
        <span class="tab-line" v-if="index === tabIndex"></span>
      </div>
    </div>
    <Rank :tabRank="tabRank"></Rank>
  </div>
</template>

<script>
  import Rank from './components/ranking.vue'
  export default {
    name: 'battle',
    components: {Rank},
    data () {
      return {
        tabIndex: 0,
        tabRank: [],
        rankData: [
          {
            title: '回报榜',
            list: [
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              }
            ]
          },
          {
            title: '命中榜',
            list: [
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              }
            ]
          },
          {
            title: '连红榜',
            list: [
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              }
            ]
          },
          {
            title: '赛事红人',
            list: [
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                competition: '日职',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                competition: '西甲',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              },
              {
                rate: '100',
                rate_title: '7日回报率',
                name: '好彩姐',
                competition: '意甲',
                logo: 'https://img1.dongqiudi.com/fastdfs3/M00/79/2E/ChOxM1vRoUyAXyWPAAAxKRNL1QM101.jpg'
              }
            ]
          }
        ]
      }
    },
    created () {
      this.tabRank = this.rankData[this.tabIndex].list;
    },
    mounted () {
      
    },
    methods: {
      chooseTab (index) {
        if(this.tabIndex === index){
          return
        }
        this.tabIndex = index;
        this.tabRank = this.rankData[this.tabIndex].list;
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
html,body{
  min-height: 100%;
  background-color: #f7f7f7;
}
img{
  display: block;
}
.battle{
  background-color: #f7f7f7;
}
.battle-tab{
  display: table;
  width: 100%;
  height: 70/@px2rem;
  line-height: 70/@px2rem;
  background-color: #fafafa;
  border-bottom: 1px solid #ededed;
  .options-tab{
    position: relative;
    display: table-cell;
    color: #555555;
    font-size: 28/@px2rem;
    text-align: center;
    &.choose-tab{
      color: #16b13a
    }
    .tab-line{
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      height: 0;
      width: 110/@px2rem;
      background-color: #16b13a;
      border: 1px solid #16b13a;
    }
  }
}
</style>

