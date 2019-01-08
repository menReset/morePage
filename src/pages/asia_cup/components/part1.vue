<template>
	<div id="part1">
		<img src="../asserts/logo_two.png" alt="" class="logo">
    <img src="../asserts/title.png" alt="" class="title">
    <p class="title-hint">请在每组选择两支球队晋级淘汰赛</p>
		<div class="groups">
      <div class="group" v-for="(item, index) in groupsList" :key="index">
        <p class="group-name">{{ item.name }}组</p>
        <ul >
          <li v-for="(x, teamIndex) in item.list" :key="teamIndex" @click="chooseTeam(x, teamIndex, item.list, item)" :class="{'team-act': x.act}">
						<img :src="x.icon" alt="" class="country-icon">
            <span class="country-name">{{x.name}}</span>
            <span v-if="x.act" class="act circle">{{x.act}} </span>
            <span v-else class="circle"></span>
          </li>
        </ul>
      </div>
    </div>
		<p class="next-button ok" :class="{'sub-btn' : sub_btn}" v-if="nextStatus" @click="next">{{ "进入淘汰赛" }}</p>
    <p class="next-button" :class="{'sub-btn' : sub_btn}" v-else>{{ "进入淘汰赛" }}</p>
	</div>
</template>

<script>
	import groupsList from '../asserts/groupsList.json';
  import switzerlandIcon from '../asserts/Switzerland.png';
  import { wechatShare, awakeApp } from '../asserts/js/share.js';
	export default {
		name: 'part1',
		data () {
			return {
				groupsList,
				nextStatus: false,
				team16: {},
        team16Ids: [],
        team16Length: 0,
        sub_btn:false
			}
		},
		created () {
      if(browers.dqd){
        this.sub_btn = true; 
      }
      
      console.log(this.groupsList);
      if (browers.dqd) {
        if(!(browers.iOS && browers.version && browers.version < 598)){ //ios版本5.9.8以下的不执行   
          this.setup_share();
        }
      }
		},
		mounted () {
			// 替换瑞士国旗
      let switzerland = this.groupsList[4].list[2];
			switzerland.icon = switzerlandIcon;
			this.groupsList[4].list.splice(2, 1, switzerland);

			for (let index = 0; index < this.groupsList.length; index++) {
        const element = this.groupsList[index].list;
        for (let i = 0; i < element.length; i++) {
          let elementI = element[i];
          if (elementI.act) {
            this.team16Length++;
            this.team16Ids.push(elementI.act);
          }
        }
      }
      if (window.mainData.team16) {
        this.team16 = window.mainData.team16;
      }
      if (this.team16Length === 16) {
        this.nextStatus = true;
      } else {
        this.nextStatus = false;
      }
		},
		methods: {
			chooseTeam (x, index, itemList, item) { // 选择球队
        const name = item.name;
        let actCount = [];
        for (let i = 0; i < itemList.length; i++) {
          if (itemList[i].act) {
            actCount.push(itemList[i].act);
          }
        }

        // 每个小组最多选两个
        if (itemList[index].act) {
          this.team16[itemList[index].act] = '';
          itemList[index].act = '';
          this.team16Ids.splice(index, 1);
        } else {
          if (actCount.length < 1) {
            itemList[index].act = name + '1';
            this.team16[name + '1'] = itemList[index];
          } else if (actCount.length < 2) {
            if (actCount.includes(name + '2')) {
              itemList[index].act = name + '1';
              this.team16[name + '1'] = itemList[index];
            } else {
              itemList[index].act = name + '2';
              this.team16[name + '2'] = itemList[index];
            }
          } else if (actCount.length < 3 && this.team16Length < 16){
            if (actCount.includes(name + '2') && actCount.includes(name + '3')) {
              itemList[index].act = name + '1';
              this.team16[name + '1'] = itemList[index];
            } else if (actCount.includes(name + '1') && actCount.includes(name + '3')) {
              itemList[index].act = name + '2';
              this.team16[name + '2'] = itemList[index];
            } else {
              itemList[index].act = name + '3';
              this.team16[name + '3'] = itemList[index];
            }
          } else {
            return;
          }
        }
        // console.log('this.team16:', this.team16);
        // 选满16个完成第一步
        let team16Length = 0;
        this.team16Ids = [];
        for (const key in this.team16) {
          const element = this.team16[key];
          console.log(element);
          if (element) {
            this.team16Ids.push(element.id);
            team16Length++;
          }
        }
        this.team16Length = team16Length;
        console.log('team16Length', this.team16Length);
        if (this.team16Length === 16) {
          this.nextStatus = true;
        } else {
          this.nextStatus = false;
        }
      },
			next () {
				console.log('window', window.mainData);
        if (this.team16Ids.length === 16) {
        	window.mainData.team16 = this.team16;
          // location.href = `#/part2`;
          this.$router.push({path : 'part2'});
        }
      },
      setup_share () {    //分享
        connectWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('shareUrl',{
            'is_immediately':'false',
            'is_picture':'false',
            'title':globalParams.shareTitle,
            'content':globalParams.shareDesc
          })
        })
      }
		}
	}
</script>

<style lang="less" scoped>
	@px2rem: 37.5rem;
	#part1{
		color: #fff;
		// height: 100%;
		min-height: 100%;
    background: url("../asserts/part1-bg.jpg") top center;
    background-size: 100% auto;
	}
	.logo{
    // margin: 20/@px2rem 0 8/@px2rem 20/@px2rem;      //新一版调样式
    // width: 125/@px2rem;
    margin: 20/@px2rem auto;
    width: 239/@px2rem;
	}
	.title{
    width: 100%;
	}
	.title-hint{
		text-align: center;	
		line-height: 60/@px2rem;
		font-size: 12px;
	}
	.groups{
		overflow: hidden;
		font-size: 24/@px2rem;
    padding-bottom: 110/@px2rem;
    .group{
      width: 45%;
      float: left;
      margin-left: 3%;
      background-color: #333d46;
      margin-bottom: 36/@px2rem;
      .group-name{
        height: 52/@px2rem;
        padding: 0 20/@px2rem;                    
        line-height: 52/@px2rem;
        background-color: #404c57;
      }
      ul{
        // padding: 0 20px;
        li{
          // padding: 10px 0;
          border-bottom: 1/@px2rem solid #241323;/*no*/
          >*{
            display: inline-block;
            vertical-align: middle;
            padding: 20/@px2rem 0;
          }
          &:last-of-type{
            border-bottom: none;
          }
            .country-icon{
              // width: 48px;
              height: 34/@px2rem;
              // margin: 20px 0 0 20px;
              margin-left: 20/@px2rem;
            }
            .circle{
              width: 34/@px2rem;
              height: 34/@px2rem;
              border: 1px solid #929cac;/*no*/
              padding: 0;
              border-radius: 34/@px2rem;
              float: right;
              margin: 18/@px2rem 20/@px2rem 0 0;
            }
            .act {
              line-height: 34/@px2rem;
              border: none;
            }
        }
        li.team-act{
          background-color: #16b13a;
        }
      }
    }
	}
	.next-button{
    height: 92/@px2rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    line-height: 92/@px2rem;
    background-color: #888888;
    color: #fff;
    font-size: 34/@px2rem;
    text-align: center;
  }
  .next-button.ok{
    background-color: #ec6f3d;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px){
    .sub-btn{
      position: fixed;
      bottom: 55/@px2rem;
    }
  }
</style>
