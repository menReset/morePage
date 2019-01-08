<template>
  <div id="part2" @click="closeFlap">
    <!-- <img :src="imgUrl" alt="" class="show-img" v-if="imgUrl"> -->
		<!-- 头部 -->
    <div class="hint-flap" v-show="showhintflap">
      <span><img src="../asserts/hint.png" alt=""></span>
    </div>
    <p v-show="!showShareBtn" class="back" @click="back"><img class="back-icon" src="../asserts/back.png" alt=""><span>{{ "返回" }}</span></p>
    <img src="../asserts/logo_two.png" alt="" class="logo">  
    <img src="../asserts/title.png" alt="" class="title">
    <p class="team-people-num" v-if="!score"></p>
    <p class="team-people-num" v-else>{{ score }}人猜冠军是{{ champion.name }}，支持度排名第{{ rank }}</p>
		<!-- 晋级图 -->
		<div class="content">
      <!-- 16强 左 -->
      <div class="grounp-8-left">
        <div class="grounp-8" v-for="(item, index) in team16Left" :key="'grounp-8' + index">
          <transition name="fade">
            <div v-if="index === 0" class="tips" v-show="showTips">{{ "点击国旗进行操作" }} <span class="triangle"></span><span class="angle" @touchstart="touchBody">X</span></div>
          </transition>
          <div @click="clickTeam16Left(x)" class="team-16" v-for="(x, index) in item" :key="'team-16' + index" :class="{'un-act': Number(x.champion )=== -1}">
        		<div class="team" v-if="x">
            	<p class="team-number">{{x.act}}</p>
           	 	<p class="team-icon">
            		<img :src="x.icon" alt="">
            		<span :class="{'margin-left': x.id === 'e3' ? true : false}">{{x.name}}</span>
            	</p>
            	<div class="screen" v-show="Number(x.champion) === -1"></div>
            	<p class="link-down" :class="{'line-act': Number(x.champion) === 1}" v-if="index%2 === 0"></p>
            	<p class="link-up" :class="{'line-act': Number(x.champion) === 1}" v-else></p>
          	</div>
          	<p class="link-row" :class="{'line-act': Number(item[0].champion) === 1 || Number(item[1].champion) === 1}"></p>
        	</div>
        </div>
      </div>
      <!-- 八强 左 -->
      <div class="grounp-4-left">
        <div class="grounp-4" v-for="(item, index) in team8Left" :key="'grounp-4' + index">
          <div class="team-8" @click="clickTeam8Left(x)" v-for="(x, index) in item" :key="'team-8' + index">
            <div>
              <div class="team-icon" :style="{'backgroundColor': x.id === 'e3' ? 'transparent' : ''}">
                <img :src="x.icon" alt="">
                <div class="screen" v-show="Number(x.champion) === -1"></div>
              </div>
              <p class="link-down" :class="{'line-act': Number(x.champion) === 1}" v-if="index%2 === 0"></p>
              <p class="link-up" :class="{'line-act': Number(x.champion) === 1}" v-else></p>
            </div>
          </div>
          <p class="link-row" :class="{'line-act': Number(item[0].champion) === 1 || Number(item[1].champion) === 1}"></p>
        </div>
      </div>
      <!-- 四强 左 -->
      <div class="grounp-2-left">
        <div>
          <div class="grounp-2" @click="clickTeam4Left(item)" v-for="(item, index) in team4Left" :key="index">
            <div class="team-icon" :style="{'backgroundColor': item.id === 'e3' ? 'transparent' : ''}">
              <div>
                <img :src="item.icon" alt="">
                <div class="screen" v-show="Number(item.champion) === -1"></div>                            
              </div>
            </div>
            <p class="link-down" v-if="index%2 === 0" :class="{'line-act': Number(item.champion) === 1}"></p>
            <p class="link-up" v-else :class="{'line-act': Number(item.champion) === 1}"></p>
          </div>
          <p class="link-row" :class="{'line-act': Number(team4Left[0].champion) === 1 || Number(team4Left[1].champion) === 1}"></p>
        </div>
      </div>
      <!-- 决赛 -->
      <div class="grounp-1-center"> 
        <img class="cup" src="../asserts/cup.png" alt="">
        <div class="link-row" :class="{'line-act': Number(team2[0].champion) === 1 || Number(team2[1].champion) === 1}"></div>
        <div class="grounp-1" @click="clickChampion(item)" v-for="(item, index) in team2" :key="index">
          <p class="line-left" :class="{'line-act': Number(item.champion) === 1}" v-if="index%2 === 1"></p>
          <div class="team-icon" :style="{'backgroundColor': item.id === 'e3' ? 'transparent' : ''}">
            <img :src="item.icon" alt="">
            <div class="screen" v-show="Number(item.champion) === -1"></div>
          </div>
          <p class="line-right" :class="{'line-act': Number(item.champion) === 1}" v-if="index%2 === 0"></p>
        </div>
        <!-- v-show="champion.name" -->
        <div class="champion">
          <div class="icon-box">
            <img v-if="champion.name" :src="champion.icon" alt="" class="champion-icon">
            <div v-else class="screen"></div>
          </div>
          <p class="champion-name">{{champion.name}} </p>
          <img v-if="champion.name" class="champion-logo" src="../asserts/champion-light.png" alt="">
          <img v-else class="champion-logo" src="../asserts/champion-grey.png" alt="">
        </div>
      </div>
      <!-- 16强 右-->
      <div class="grounp-8-right">
        <div class="grounp-8" v-for="(item, index) in team16Right" :key="index">
          <div class="team-16" @click="clickTeam16Right(x)" v-for="(x, index) in item" :key="index" :class="{'un-act': Number(x.champion )=== -1}">
            <div class="team" v-if="x">
              <p class="team-number">{{x.act}}</p>
              <p class="team-icon">
                <img :src="x.icon" alt="">
                <span :class="{'margin-left': x.id === 'e3' ? true : false}">{{x.name}}</span>
              </p>
              <div class="screen" v-show="Number(x.champion) === -1"></div>                                
              <p class="link-down" :class="{'line-act': Number(x.champion) === 1}" v-if="index%2 === 0"></p>
              <p class="link-up" :class="{'line-act': Number(x.champion) === 1}" v-else></p>
            </div>
            <p class="link-row" :class="{'line-act': Number(item[0].champion) === 1 || Number(item[1].champion) === 1}"></p>                        
          </div>
        </div>
      </div>
      <!-- 8强 右-->
      <div class="grounp-4-right">
        <div class="grounp-4" v-for="(item, index) in team8Right" :key="index">
          <div class="team-8" @click="clickTeam8Right(x)" v-for="(x, index) in item" :key="index">
            <div>
              <div class="team-icon" :style="{'backgroundColor': x.id === 'e3' ? 'transparent' : ''}">
                <img :src="x.icon" alt="">
                <div class="screen" v-show="Number(x.champion) === -1"></div>                                
              </div>
              <p class="link-down" v-if="index%2 === 0" :class="{'line-act': Number(x.champion) === 1}"></p>
              <p class="link-up" v-else :class="{'line-act': Number(x.champion) === 1}"></p>
              <!-- <p class="link-row"></p> -->
            </div>
          </div>
          <p class="link-row" :class="{'line-act': Number(item[0].champion) === 1 || Number(item[1].champion) === 1}"></p>                    
        </div>
      </div>
      <!-- 四强 右 -->
      <div class="grounp-2-right">
        <div>
          <div class="grounp-2" @click="clickTeam4Right(item)" v-for="(item, index) in team4Right" :key="index">
            <div class="team-icon" :style="{'backgroundColor': item.id === 'e3' ? 'transparent' : ''}">
              <div>
                <img :src="item.icon" alt="">
                <div class="screen" v-show="Number(item.champion) === -1"></div>
              </div>
            </div>
            <p class="link-down" v-if="index%2 === 0" :class="{'line-act': Number(item.champion) === 1}"></p>
            <p class="link-up" v-else :class="{'line-act': Number(item.champion) === 1}"></p>
          </div>
          <p class="link-row" :class="{'line-act': Number(team4Right[0].champion) === 1 || Number(team4Right[1].champion) === 1}"></p>
          <!-- <p class="link-row"></p> -->
        </div>
      </div>
    </div>
    <div v-if="!showShareBtn && champion.name" @click.stop="confirm" class="confirm">{{ "完成" }}</div>
    <div v-if="!showShareBtn && !champion.name" class="confirm gray">{{ "完成" }}</div>
    <div v-if="showShareBtn" class="share">
      <div class="share-dqd">
        <img class="page-code" src="../asserts/page_code.png" alt="" @touchstart="gtouchstart" @touchend="gtouchend" @touchmove="gtouchmove">
        <p>{{ "长按二维码生成你的冠军之路" }}</p>
        <img src="../asserts/jeep1.png" alt="" class="jeep">
      </div>
    </div>
	</div>
</template>

<script>
  import { wechatShare, awakeApp } from '../asserts/js/share.js';
	export default {
		name: 'part2',
		data () {
      let team16 = window.mainData.team16;
			return {
        team16: {},
        team16Left: [[team16.A1, team16.B2], [team16.C1, team16.D2], [team16.E1, team16.F2], [team16.G1, team16.H2]],
        team16Right: [[team16.B1, team16.A2], [team16.D1, team16.C2], [team16.F1, team16.E2], [team16.H1, team16.G2]],
        team8Left: [[{}, {}], [{}, {}]],
        team8Right: [[{}, {}], [{}, {}]],
        team4Left: [{}, {}],
        team4Right: [{}, {}],
        team2: [{}, {}],
        champion: {},
        showShareBtn: false,
        showTips: true,
        shareAfter: false,
        timeOutEvent: 0,
        shareFlap:'false',      //控制分享浮层
        okShare:'false',        //控制分享出去为图片
        allData:[],
        imgUrl:'',
        showhintflap:false,      //分享提示蒙版
        rank: null,            //排名
        score: null            //人数
			}
    },
    created () {
      console.log('16强左边',this.team16Left);
      console.log('16强右边 ',this.team16Right);
      this.shareFlap = 'false';
      this.okShare = 'false';
      if (browers.dqd) {
        if(!(browers.iOS && browers.version && browers.version < 598)){ //ios版本5.9.8以下的不执行   
          this.setup_share();
        }
      }
    },
    mounted () {
      // this.mergeData();
      this.showTips = true;
      setTimeout(() => {
        this.showTips = false;
      },3000);
      this.resetChampion();
      // console.log('this.team16Left', this.team16Left);

      if (ua.match(/micromessenger/)) {
        let config = {
          title: globalParams.shareTitle,
          desc: globalParams.shareDesc,
          link: `${location.origin}/webapp/world_cup_way/world_cup_way.html#/part1`
        }
        wechatShare(config)
      }
    },
		methods: {
      closeFlap () {
        if(this.showhintflap){
          this.showhintflap = false;
        }
      },
      touchBody () {
        this.showTips = false;
      },
      mergeData () {    //合并数据
        var pushData =[];   //提交给后台的数据
        this.team16Left.forEach((element) => {  //合并16强左边
          this.allData.push(element[0]);
          this.allData.push(element[1]);
        });
        this.team16Right.forEach((element) => {  //合并16强右边
          this.allData.push(element[0]);
          this.allData.push(element[1]);
        });
        this.team8Left.forEach((element) => {  //合并8强左边
          this.allData.push(element[0]);
          this.allData.push(element[1]);
        });
        this.team8Right.forEach((element) => {  //合并8强右边
          this.allData.push(element[0]);
          this.allData.push(element[1]);
        });
        this.team4Left.forEach((element) => {  //合并4强左边
          this.allData.push(element);
        });
        this.team4Right.forEach((element) => {  //合并4强右边
          this.allData.push(element);
        });
        this.team2.forEach((element) => {  //合并2强
          this.allData.push(element);
        });
        this.allData.push(this.champion);  //合并冠军

        this.allData.forEach((element) => {   //转换成后台需要数据类型
          pushData.push([element.id,element.champion.toString()]);
        });

        this.$axios.post(`${getHostName()}/champion2018/guess`,{
          pushData:pushData
        })
        .then(res => {
          // this.imgUrl = res.data.data.imgurl;
          this.imgUrl = res.data.data.cacheurl;
          this.$router.push({name : 'show' , params : {val : this.imgUrl}});
          console.log('图片地址',this.imgUrl);
        })
        .catch(err => {

        })
        
        console.log('all',this.allData);
        console.log('push',JSON.stringify(pushData));
      },
      resetChampion() { // 重置champion的值
        for (let index = 0; index < this.team16Left.length; index++) {
          const element = this.team16Left[index];
          for (let i = 0; i < element.length; i++) {
            const elementI = element[i];
            elementI.champion = '';
            this.team16Left[index].splice(i, 1, elementI);
          }
        }
        for (let index = 0; index < this.team16Right.length; index++) {
          const element = this.team16Right[index];
          for (let i = 0; i < element.length; i++) {
            const elementI = element[i];
            elementI.champion = '';
            this.team16Right[index].splice(i, 1, elementI);
          }
        }
      },
      toggleSelf(data) { // 检查自己的小组
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if (!element.name) {
            return false;
          }
        }
        return true;
      },
      checkTeam4(team, slide, end) { // 检查是否四强中
        if (!team) {
          return;
        }
        for (let index = 0; index < slide.length; index++) {
          const element = slide[index];
          if (element.name && element.name === team.name) {
            slide[index] = end;
          }
        }
        this.checkTeam2(team, end);
        this.checkChampion(team, end);
      },
      checkTeam2(team, end) { // 检查是否在决赛中
        if (!team) {
          return;
        }
        for (let index = 0; index < this.team2.length; index++) {
          const element = this.team2[index];
          if (element.name && element.name === team.name) {
            this.team2[index] = end;
          }
        }
        this.checkChampion(team, end);
      },
      checkChampion(team, end) {
        if (!team) {
          return;
        }
        if (this.champion.name && this.champion.name === team.name) {
          this.champion = end;
        }
      },
      clickTeam16Left(data) { // 点击16强队伍
        if (this.showShareBtn) {
          return;
        }
        console.log('data', data);
        let team4Left = this.team4Left;
        if (data.act.indexOf('A') >= 0 || data.act.indexOf('B') >= 0) {
          this.checkTeam4(this.team8Left[0][0], team4Left, data);
          this.team8Left[0].splice(0, 1, data);
        }
        if (data.act.indexOf('C') >= 0 || data.act.indexOf('D') >= 0) {
          this.checkTeam4(this.team8Left[0][1], team4Left, data);
          this.team8Left[0].splice(1, 1, data);
        }
        if (data.act.indexOf('E') >= 0 || data.act.indexOf('F') >= 0) {
          this.checkTeam4(this.team8Left[1][0], team4Left, data);
          this.team8Left[1].splice(0, 1, data);
        }
        if (data.act.indexOf('G') >= 0 || data.act.indexOf('H') >= 0) {
          this.checkTeam4(this.team8Left[1][1], team4Left, data);
          this.team8Left[1].splice(1, 1, data);
        }
        if (this.champion.name === data.name) {
          this.champion = data;
        }
        console.log('team8Left', this.team8Left);
      },
      clickTeam16Right(data) { // 点击16强队伍
        if (this.showShareBtn) {
          return;
        }
        let team4Right = this.team4Right;
        if (data.act.indexOf('A') >= 0 || data.act.indexOf('B') >= 0) {
          this.checkTeam4(this.team8Right[0][0], team4Right, data);
          this.team8Right[0].splice(0, 1, data);
        }
        if (data.act.indexOf('C') >= 0 || data.act.indexOf('D') >= 0) {
          this.checkTeam4(this.team8Right[0][1], team4Right, data);
          this.team8Right[0].splice(1, 1, data);
        }
        if (data.act.indexOf('E') >= 0 || data.act.indexOf('F') >= 0) {
          this.checkTeam4(this.team8Right[1][0], team4Right, data);
          this.team8Right[1].splice(0, 1, data);
        }
        if (data.act.indexOf('G') >= 0 || data.act.indexOf('H') >= 0) {
          this.checkTeam4(this.team8Right[1][1], team4Right, data);
          this.team8Right[1].splice(1, 1, data);
        }
      },
      clickTeam8Left(data) { // 点击八强队伍
        if (this.showShareBtn) {
          return;
        }
        // if (data.act) {
        if (this.toggleSelf(this.team8Left[0])) {
          this.checkTeam2(this.team4Left[0], data);
          if (data.act.indexOf('A') >= 0 || data.act.indexOf('B') >= 0) {
            this.team4Left.splice(0, 1, data);
          } else if (data.act.indexOf('C') >= 0 || data.act.indexOf('D') >= 0) {
            this.team4Left.splice(0, 1, data);
          }
        }
        if (this.toggleSelf(this.team8Left[1])) {
          this.checkTeam2(this.team4Left[1], data);
          if (data.act.indexOf('E') >= 0 || data.act.indexOf('F') >= 0) {
            this.team4Left.splice(1, 1, data);
          } else if (data.act.indexOf('G') >= 0 || data.act.indexOf('H') >= 0) {
            this.team4Left.splice(1, 1, data);
          }
        }
        // }
      },
      clickTeam8Right(data) { // 点击八强队伍
        if (this.showShareBtn) {
          return;
        }
        console.log('data8:', data);
        if (this.toggleSelf(this.team8Right[0])) {
          this.checkTeam2(this.team4Right[0], data);
          if (data.act.indexOf('A') >= 0 || data.act.indexOf('B') >= 0) {
            this.team4Right.splice(0, 1, data);
          } else if (data.act.indexOf('C') >= 0 || data.act.indexOf('D') >= 0) {
            this.team4Right.splice(0, 1, data);
          }
        }
        if (this.toggleSelf(this.team8Right[1])) {
          this.checkTeam2(this.team4Right[1], data);
          if (data.act.indexOf('E') >= 0 || data.act.indexOf('F') >= 0) {
            this.team4Right.splice(1, 1, data);
          } else if (data.act.indexOf('G') >= 0 || data.act.indexOf('H') >= 0) {
            this.team4Right.splice(1, 1, data);
          }
        }
      },
      clickTeam4Left(data) { // 点击四强队伍
        console.log('data4', data);
        if (!this.toggleSelf(this.team4Left) || this.showShareBtn) {
          return;
        }
        this.checkChampion(this.team2[0], data);
        this.team2.splice(0, 1, data);
      },
      clickTeam4Right(data) { // 点击四强队伍
        if (!this.toggleSelf(this.team4Right) || this.showShareBtn) {
          return;
        }
        this.checkChampion(this.team2[1], data);
        this.team2.splice(1, 1, data);
      },
      clickChampion(data) { // 点击决赛队伍
        if (!this.toggleSelf(this.team2) || this.showShareBtn) {
          return;
        }
        this.champion = data;
      },
      confirm() { // 生成晋级图
        // console.log('总数据',this.allData)
        // console.log('16强左边',this.team16Left);
        // console.log('16强',this.team16Right);
        // console.log('8强左边',this.team8Left);
        // console.log('8强',this.team8Right);
        // console.log('4强左边',this.team4Left);
        // console.log('4强',this.team4Right);
        // console.log('2强',this.team2);
        // console.log('冠军',this.champion);
        
        if(browers.dqd){
          new Image().src = "//stat.dongqiudi.com/world_cup_way?action=dqd_clickConfirm";
        }else{
          new Image().src = "//stat.dongqiudi.com/world_cup_way?action=share_clickConfirm";
        }

        this.showShareBtn = true;
        this.shareAfter = true;
        // let left = ['A1', 'B2', 'C1', 'D2', 'E1', 'F2', 'G1', 'H2'];
        // let right = ['A2', 'B1', 'C2', 'D1', 'E2', 'F1', 'G2', 'H1'];
        let end = this.champion.act;
        console.log('end', end);
        // let end = 'A1';
        // if (left.includes(end)) {
        // 16强
        for (let index = 0; index < this.team16Left.length; index++) {
          const element = this.team16Left[index];
          for (let i = 0; i < element.length; i++) {
            const elementI = element[i];
            if (elementI.act === end) {
              elementI.champion = 1;
              this.team16Left[index].splice(i, 1, elementI);
            } else {
              elementI.champion = -1;
              this.team16Left[index].splice(i, 1, elementI);
            }
          }
        }
        // 8强
        for (let index = 0; index < this.team8Left.length; index++) {
          const element = this.team8Left[index];
          for (let i = 0; i < element.length; i++) {
            const elementI = element[i];
            if (elementI.act === end) {
              elementI.champion = 1;
            } else {
              elementI.champion = -1;
            }
            this.team8Left[index].splice(i, 1, elementI);
          }
        }
        // 4强
        for (let index = 0; index < this.team4Left.length; index++) {
          const element = this.team4Left[index];
          if (element.act === end) {
            element.champion = 1;
          } else {
            element.champion = -1;
          }
          this.team4Left.splice(index, 1, element);
        }
        console.log('this.team8Left', this.team8Left);
        // }
        // if (!right.includes(end)) {
        // 16强
        for (let index = 0; index < this.team16Right.length; index++) {
          const element = this.team16Right[index];
          console.log('element', element);
          for (let i = 0; i < element.length; i++) {
            const elementI = element[i];
            if (elementI.act === end) {
              elementI.champion = 1;
              this.team16Right[index].splice(i, 1, elementI);
            } else {
              elementI.champion = -1;
              this.team16Right[index].splice(i, 1, elementI);
            }
          }
        }
        // 8强
        // for (let index = 0; index < this.team8Right.length; index++) {
        //     const element = this.team8Right[index];
        //     for (let i = 0; i < element.length; i++) {
        //         const elementI = element[i];
        //         if (elementI.act === end) {
        //             elementI.champion = 1;
        //         } else {
        //             elementI.champion = -1;
        //         }
        //         this.team8Right[index].splice(i, 1, elementI);
        //     }
        // }
        // // 4强
        // for (let index = 0; index < this.team4Right.length; index++) {
        //     const element = this.team4Right[index];
        //     if (element.act === end) {
        //         element.champion = 1;
        //     } else {
        //         element.champion = -1;
        //     }
        //     this.team4Right.splice(index, 1, element);
        // }
        // }
        // 决赛
        for (let index = 0; index < this.team2.length; index++) {
          const element = this.team2[index];
          if (element.act === end) {
            element.champion = 1;
          } else {
            element.champion = -1;
          }
          this.team2.splice(index, 1, element);
        }


        this.okShare = 'true';
        this.setup_share();

        console.log("后台需要的东西",this.champion.id);
        this.$axios.get(`${getHostName()}/champion2018/votechampion?team=${this.champion.id}`,{

        })
        .then(res => {
          console.log('我需要的东西',res.data.data);
          this.rank = res.data.data.rank;
          this.score = res.data.data.score;
        })
        .catch(err => {

        })

        if(!browers.dqd){       //站外触发
          this.mergeData();   //调用合并数据方法
        }

        if(browers.dqd){
          this.showhintflap = true;

          setTimeout(() => {
            this.showhintflap = false;
          },3000);
        }
        

        
      },
		  back() { // 返回上一页
		    window.history.go(-1);
      },
      gtouchstart() {
        this.timeOutEvent = setTimeout(()=> {
          new Image().src = "//stat.dongqiudi.com/world_cup_way?action=dqd_clickShare_btn";
          this.longPress();
        }, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
        return;
      },
      //手释放，如果在500毫秒内就释放，则取消长按事件
      gtouchend() {
        clearTimeout(this.timeOutEvent); //清除定时器
        return;
      },
      //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
      gtouchmove() {
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
      },
      //真正长按后应该执行的内容
      longPress() {
        this.timeOutEvent = 0;
        //执行长按要执行的内容
              
        this.shareFlap = 'true';
        this.setup_share();
      },
      setup_share () {    //分享
        connectWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('shareUrl',{
            'is_immediately':this.shareFlap,
            'is_picture':this.okShare,
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
	.line-act{
    // background-color: #24af41 !important;
    border-color: #24af41 !important;
  }
  .un-act{
    color: rgba(255,255,255,.5);
  }
  // .margin-left {
  //   margin-left: -20/@px2rem !important;   //注意
	// }
	#part2{
    height: 510px;
    min-height: 100%;
    background: url("../asserts/part2-bg.jpg") center center;
    background-size: 100%;
    color: #fff;
    position: relative;
    padding-top: 0.1px;
  }
  .team-people-num{
    height: 34/@px2rem;
    line-height: 34/@px2rem;
    text-align: center;
    font-size: 24/@px2rem;
    transform: scale(.8);
    color: #e9e9be;
    white-space:nowrap;
  }
  .hint-flap{
    position: fixed;
    z-index: 99;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    span{
      position: absolute;
      right: 35/@px2rem;
      bottom: 100/@px2rem;
      display: block;
      width: 492/@px2rem;
      height: 196/@px2rem;
      img{
        width: 100%;
      }
    }
  }
  // .show-img{
  //   width: 100%;
  // }
	.back{
    position: absolute;
    top: 28/@px2rem;
    left: 32/@px2rem;
    >*{
      display: inline-block;
      vertical-align: middle;
    }
    .back-icon{
      height: 36/@px2rem;
      margin-right: 4/@px2rem;
    }
  }
	.title{
		// margin: 0 0 10/@px2rem;
		width: 100%;
  }
  .logo{
    display: block;
    // width: 135/@px2rem;    //新一版调样式
    width: 239/@px2rem;
    margin: 25/@px2rem auto;
  }
  .content {
    .team-icon {
      >span {
        font-size: 24/@px2rem;
        display: block;
        width: 148/@px2rem;
        margin-left: -32/@px2rem;
        transform: scale(.8);
        line-height: 40/@px2rem;
      }
    }
    height: 810/@px2rem;
    color: #fff;
    padding: 0 16/@px2rem;
    margin-top: -20/@px2rem;
    // overflow: hidden;
    @media screen and (min-height: 667px) {
      margin-top: 10/@px2rem;
    }
    @media screen and (min-height: 800px) {
      margin-top: 70/@px2rem;
    }
    .grounp-8-left {
      float: left;
      .team-number {
        position: absolute;
        // top:0px;
        font-size: 40/@px2rem;
        left: -10/@px2rem;
        transform: scale(.5) translate(-16/@px2rem,-44/@px2rem);
      } // 左边的连线
      .link-down {
        position: absolute;
        top: 5/@px2rem;
        right: 16/@px2rem;
        width: 22/@px2rem;
        height: 56/@px2rem;
        border: 2px solid #333d46;
        /*no*/
        border-left: transparent;
        border-bottom: transparent;
      }
      .link-up {
        position: absolute;
        top: 56/@px2rem;
        right: 16/@px2rem;
        width: 22/@px2rem;
        height: 56/@px2rem;
        border: 2px solid #333d46;
        /*no*/
        border-left: transparent;
        border-top: transparent;
      }
      .link-row {
        width: 14/@px2rem;
        border: 1px solid #333d46;
        /*no*/
        position: absolute;
        top: 56/@px2rem;
        right: 0;
      }
    }
    .grounp-8 {
      position: relative;
      width: 132/@px2rem;
      height: 146/@px2rem;
      margin-bottom: 56/@px2rem;
      .tips {
        position: absolute;
        z-index: 999;
        top: 130/@px2rem;
        background-color: #ec6f3d;
        padding: 20/@px2rem;
        min-width: 300/@px2rem;
        font-size: 30/@px2rem;
        border-radius: 10/@px2rem;
        font-weight: 300;
        .triangle{
          position: absolute;
          top:-32/@px2rem;
          left: 20/@px2rem;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #ec6f3d transparent;
          // border: 15px solid #ec6f3d;
        }
        .angle {
          position: absolute;
          text-align: center;
          border-radius: 0 10/@px2rem 10/@px2rem 0;
          border-left: 1px solid #bd4515;
          line-height: 81/@px2rem;
          height: 81/@px2rem;
          width: 60/@px2rem;
          top: 1/@px2rem;
          right: 0;
        }
      }
      .team-16 {
        float: left;
        margin-left: 1px;
      }
      .line {
        float: right;
        width: 18/@px2rem;
        height: 88/@px2rem;
        border: 2px solid #333d46;
        /*no*/
        margin-top: 24/@px2rem;
        border-left-color: transparent;
      }
      .line-h {
        float: right;
        height: 4/@px2rem;
        width: 16/@px2rem;
        background: #333d46;
        margin-top: 65/@px2rem;
      }
    }
    .team-16 {
      &:last-of-type {
        .team {
          margin-top: 16/@px2rem; // margin-top: 6px;
        }
      }
      .team {
        // position: relative;
        // margin-left: 4px;
        // overflow: hidden;
        &:after {
          content: '';
          visibility: hidden;
          height: 0;
          clear: both;
          height: 0;
          display: block;
        }
        .screen {
          position: absolute;
          height: 28/@px2rem;
          width: 44/@px2rem;
          margin-top: -8/@px2rem;
          margin-left: 21/@px2rem;
          background-color: rgba(0, 0, 0, .5);
        }
        .team-icon {
          float: left;
          width: 86/@px2rem;
          text-align: center;
          margin-top: -8/@px2rem;
          margin-bottom: 32/@px2rem;
          img {
            height: 28/@px2rem;
            display: block;
            margin: 0 auto;
          }
        }
      }
    } // 八强样式
    .grounp-8-right {
      float: right;
      .team-16 {
        float: right; // margin-left: -10px;
        .team-icon {
          span {
            margin-left: -32/@px2rem;
          }
        }
      }
      .link-down {
        position: absolute;
        top: 5/@px2rem;
        left: 16/@px2rem;
        width: 22/@px2rem;
        height: 56/@px2rem;
        border: 2px solid #333d46;
        /*no*/
        border-right: transparent;
        border-bottom: transparent;
      }
      .link-up {
        position: absolute;
        top: 56/@px2rem;
        left: 16/@px2rem;
        width: 22/@px2rem;
        height: 56/@px2rem;
        border: 2px solid #333d46;
        /*no*/
        border-right: transparent;
        border-top: transparent;
      }
      .link-row {
        width: 14/@px2rem;
        border: 1px solid #333d46;
        /*no*/
        position: absolute;
        top: 56/@px2rem;
        left: 0;
      }
      .team-number {
        position: absolute;
        font-size: 40/@px2rem;
        right: -10/@px2rem; // top: 0;
        // left: auto;
        transform: scale(.5) translate(20/@px2rem,-44/@px2rem);
      }
    }
    .grounp-4-left,
    .grounp-4-right {
      width: 98/@px2rem;
      height: 100%;
      .grounp-4 {
        position: relative;
        height: 50%;
        padding-top: 1px;
        box-sizing: border-box;
        .link-row {
          width: 14/@px2rem;
          border: 1px solid #333d46;
          /*no*/
          position: absolute;
          top: 156/@px2rem;
          right: 0;
        }
      }
    }
    .grounp-4-left {
      float: left;
      margin-left: 6/@px2rem;
      .team-8 {
        position: relative;
        &:first-of-type {
          margin-bottom: 170/@px2rem;
          margin-top: 42/@px2rem;
        }
        .screen {
          position: absolute;
          top: 0;
          left: 0;
          height: 32/@px2rem;
          width: 48/@px2rem;
          background-color: rgba(0, 0, 0, .5);
        }
        .team-icon {
          width: 48/@px2rem;
          height: 32/@px2rem;
          background-color: #333d46;
          >img {
            // width: 48px;
            height: 32/@px2rem;
          }
        }
        .link-down {
          position: absolute;
          top: 10/@px2rem;
          right: 14/@px2rem;
          width: 22/@px2rem;
          height: 104/@px2rem;
          border: 2px solid #333d46;
          /*no*/
          border-left: transparent;
          border-bottom: transparent;
        }
        .link-up {
          position: absolute;
          bottom: 14/@px2rem;
          right: 14/@px2rem;
          width: 22/@px2rem;
          height: 102/@px2rem;
          border: 2px solid #333d46;
          /*no*/
          border-left: transparent;
          border-top: transparent;
        }
      }
    }
    .grounp-4-right {
      float: right;
      .grounp-4 {
        position: relative;
        height: 50%;
        padding-top: 1px;
        box-sizing: border-box;
        .link-row {
          width: 13/@px2rem;
          border: 1px solid #333d46;
          /*no*/
          position: absolute;
          top: 156/@px2rem;
          left: 0;
        }
      }
      .team-8 {
        position: relative;
        &:first-of-type {
          margin-bottom: 170/@px2rem;
          margin-top: 42/@px2rem;
        }
        .screen {
          position: absolute;
          top: 0;
          right: 4/@px2rem;
          height: 32/@px2rem;
          width: 48/@px2rem;
          background-color: rgba(0, 0, 0, .5);
        }
        .team-icon {
          width: 48/@px2rem; // margin: 0 8px;
          height: 32/@px2rem;
          background-color: #333d46;
          margin-left: 46/@px2rem;
          >img {
            // width: 48px;
            height: 32/@px2rem;
          }
        }
        .link-down {
          position: absolute;
          top: 14/@px2rem;
          left: 14/@px2rem;
          width: 22/@px2rem;
          height: 98/@px2rem;
          border: 2px solid #333d46;
          /*no*/
          border-right: transparent;
          border-bottom: transparent;
        }
        .link-up {
          position: absolute;
          bottom: 14/@px2rem;
          left: 14/@px2rem;
          width: 22/@px2rem;
          height: 102/@px2rem;
          border: 2px solid #333d46;
          /*no*/
          border-right: transparent;
          border-top: transparent;
        }
      }
    } // 四强样式
    .grounp-2-left,
    .grounp-2-right {
      width: 50/@px2rem;
      height: 100%;
      >div {
        height: 100%;
        position: relative;
      }
      .grounp-2 {
        height: 50%;
        padding-top: 1px;
        position: relative;
      }
      .team-icon {
        margin-bottom: 6/@px2rem;
        >div {
          position: relative;
          .screen {
            position: absolute;
            top: 0;
            left: 0;
            width: 48/@px2rem;
            height: 32/@px2rem;
            background-color: rgba(0, 0, 0, 0.5);
          }
          img {
            height: 32/@px2rem;
          }
        }
        width: 48/@px2rem;
        height: 32/@px2rem;
        margin-top: 140/@px2rem;
        background-color: #333d46;
      }
      .link-down,
      .link-up {
        position: absolute;
        border: 1px solid #333d46;
        /*no*/
        height: 180/@px2rem;
        width: 0;
      }
      .link-row {
        width: 18/@px2rem;
        border: 1px solid #333d46;
        /*no*/
        position: absolute;
        top: 356/@px2rem;
      }
    }
    .grounp-2-left {
      float: left;
      .link-down {
        left: 23/@px2rem;
      }
      .link-up {
        left: 23/@px2rem;
        top: -50/@px2rem;
      }
      .link-row {
        right: 4/@px2rem;
      }
    }
    .grounp-2-right {
      float: right;
      .team-icon {
        margin-left: 4/@px2rem;
      }
      .link-down {
        left: 30/@px2rem;
      }
      .link-up {
        left: 30/@px2rem;
        top: -48/@px2rem;
      }
      .link-row {
        left: 10/@px2rem;
      }
    } // 决赛
    .grounp-1-center {
      float: left;
      position: relative;
      width: 152/@px2rem;
      height: 100%;
      left: 6/@px2rem;
      .cup {
        position: absolute;
        // top: 190/@px2rem;
        top: 380/@px2rem;
        left: 25/@px2rem;
        width: 100/@px2rem;
      }
      .link-row {
        position: absolute;
        top: 328/@px2rem;
        // top:164px;
        left: 75/@px2rem;
        width: 0;
        height: 26/@px2rem;
        border: 1px solid #333d46;
        /*no*/
      }
      .champion {
        margin: 0 auto;
        position: absolute;
        // top: 406/@px2rem;
        top: 190/@px2rem;
        .screen {
          width: 82/@px2rem;
          height: 56/@px2rem;
          background-color: #333d46;
          display: block;
          margin: 0 auto;
        }
        .champion-icon {
          width: 82/@px2rem;
          display: block;
          margin: 0 auto;
        }
        .champion-name {
          text-align: center;
          font-size: 22/@px2rem;
          margin: 6/@px2rem 0;
        }
        .champion-logo {
          width: 152/@px2rem;
          margin-top: 6/@px2rem;
          transform: scale(1.2);
        }
      }
      .grounp-1 {
        float: left;
        margin-top: 340/@px2rem;
        margin-bottom: 22/@px2rem;
        &:last-of-type {
          float: right;
        }
      }
      .team-icon {
        width: 48/@px2rem;
        height: 32/@px2rem;
        float: left;
        position: relative;
        background-color: #333d46;
        >img {
          height: 32/@px2rem;
        }
        .screen {
          position: absolute;
          width: 48/@px2rem;
          height: 32/@px2rem;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, .5);
        }
      }
      .line-right {
        float: left;
        border: 1px solid #333d46;
        /*no*/
        width: 16/@px2rem;
        height: 0;
        margin-left: 8/@px2rem;
        margin-top: 14/@px2rem;
      }
      .line-left {
        float: left;
        border: 1px solid #333d46;
        /*no*/
        width: 16/@px2rem;
        margin-right: 6/@px2rem;
        height: 0;
        margin-top: 14/@px2rem;
      }
    }
  }
  .confirm {
    position: absolute;
    bottom: 90/@px2rem;
    font-size: 34/@px2rem;
    width: 352/@px2rem;
    height: 92/@px2rem;
    left: 50%;
    margin-left: -176/@px2rem;
    line-height: 92/@px2rem;
    background-color: #ec6f3d;
    text-align: center;
  }

  .gray {
    background-color: #888888;
  }

  .share {
    position: absolute;
    // bottom: 30/@px2rem;
    left: 50%;
    // width: 460/@px2rem;
    // margin-left: -230/@px2rem;       //新一版调整样式
    width: 750/@px2rem;
    margin-left: -375/@px2rem;
    text-align: center;
    font-size: 24/@px2rem;
    margin-top: -120/@px2rem;
    .share-dqd {
      >.page-code {
        margin: 0 auto;
        width: 116/@px2rem;
        display: block;
      }
      >p {
        transform: scale(.8);
        margin-top: 10/@px2rem;
      }
      margin-bottom: 56/@px2rem;
      >.jeep{
        margin-top: 45/@px2rem;
        width: 100%;
      }
    }
  }
  @media only screen and (device-width: 320px) and (device-height: 568px){
    .confirm{
      bottom: 80/@px2rem !important;
    }
    .share{
      margin-top: -80/@px2rem;
    }
  }
  @media only screen and (device-width: 432px) and (device-height: 720px){
    .share{ 
       margin-top: -190/@px2rem;
    }
    .confirm{
      bottom: 20/@px2rem !important;
    }
  }
  @media only screen and (device-width: 375px) and (device-height: 812px){
    .share{ 
       margin-top: -60/@px2rem;
    }
    .confirm{
      bottom: 180/@px2rem;
    }
  }
  /* 动画样式  渐隐*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
