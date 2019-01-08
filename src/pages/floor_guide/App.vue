<template>
  <div class="floor" ref="floor" @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'>
    <transition name="fade">
      <div class="floor-box" v-if="floorIndex === i"  v-for="(item,i) in floorData" :key="i">
        <h1>第{{i+1}}篇文章</h1>
        <div v-html="item.content"></div>
        <div class="next-contant" v-if="item.next_content">
          <div class="line"></div>
          <h1>第{{i+2}}篇文章</h1>
          <div v-html="item.next_content"></div>
        </div>
      </div>
    </transition>
    <span class="next" @click="next">下</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        floorIndex: 0,
        scrollTop: 0,
        clientHeight: 0,
        startY: 0,
        currentY: 0,
        allHeight: 0,
        floorData: [
          {
            content: "<p>当地时间1月7日下午，中国队在亚洲杯小组赛第一轮2-1逆转击败吉尔吉斯斯坦队。赛后，中国队主教练里皮出席媒体发布会。</p><p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/F3/720x-/-/-/ChOxM1wzX-aAXTpnAAarjtRSqD8988.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10\" data-width=\"1572\" data-height=\"1179\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/F3/ChOxM1wzX-aAXTpnAAarjtRSqD8988.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8yNjI=/dissolve/100/dx/31/dy/11\" /></p><p>里皮首先评价了中国队的表现：“我的评价很简单，我们在上半场不够好，犯了很多错。同时我为球队感到骄傲，因为他们在下半场表现得很棒。我们用最好的方法去代表了中国——全世界最重要的国家。”</p><h2>记者问，胜利是否主要因为对方门将的失误？</h2><p>里皮回答：“第一球我们挺幸运的，是他们的失误。就跟我之前说的，上半场他们踢得更好，所以取得领先。下半场我们踢得更好，也创造了更好的机会。我觉得这个比分是反映了全场比赛的形势的。”</p><h2>记者问，24分钟就把金敬道换下，是出于什么样的考虑？</h2><p>里皮回答：“他是个好球员，他会继续得到机会，但是今天我需要把他换下，因为他没能带给我我在这场比赛所需要的，所以我及时作出了调整。”</p><h2>记者问，在比赛过程中换了几次阵型，最后换成了四后卫，这是否最佳的阵型？</h2><p>里皮说道：“下半场我换了几次阵型，因为我希望在中场多放一个人，我觉得上半场我们在中场没能控制好，所以我后卫少放一个人、中场多放了一个。”</p><h2>记者问，进球功臣于大宝在国安偶尔被安排踢中后卫，怎么评价这个现象？</h2><p>里皮回答：“他的进球非常关键，帮助我们拿到三分。我们知道在中超的情况，我们没有太多(本土的)攻击手，过去六七个月他是防守球员，因为前场都是外援，压缩了中国球员的进攻位置。不过在我们这个球队里，他是一个攻击型球员。”</p><p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/E8/720x-/-/-/ChOxM1wzVaCAGXudAAHpR5PUz1I014.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10\" data-width=\"1024\" data-height=\"683\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/E8/ChOxM1wzVaCAGXudAAHpR5PUz1I014.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xNzA=/dissolve/100/dx/20/dy/10\" /></p><h2>记者问，中国队上半场表现不够理想的原因是什么？半场跟球员们说了什么？</h2><p>里皮说道：“我不太清楚真正的原因是什么，不过这并不是第一次，我在国家队两年多了，也面对过这种情况。有时候我们上半场没能发挥好，我生气了，然后我给他们压力，之后下半场就变得好起来。我也希望上半场我的球员也能发挥出来。”</p><h2>记者问，武磊是否受伤了？会不会参加不了下一场比赛？</h2><p>里皮回答：“我现在不清楚他的情况，比赛才刚刚结束，我们之后会给他检查，他的肩胛骨可能有错位*，但是还需要检查确认，希望他下一场能够参加。”</p><p><em>*注：武磊肩胛骨可能错位为中文翻译补充</em></p><h2>记者问，上半场落后时场面仍然被动，有没有想过可能落败？晋级是不是比较有信心？</h2><p>里皮回答：“上半场我们没发挥好，我想过如果我们还这样的话有可能会输。不过在下半场踢出这样的表现是配得上三分的。我现在还不能说晋级是不是稳了，因为还有两场比赛没踢。”</p><p><strong>比赛战报</strong>：<a href=\"dongqiudi:///news/891075\" target=\"_self\" content=\"\">【国足2-1逆转迎亚洲杯开门红，于大宝建功，对方门将乌龙送礼】</a></p><p></p>",
            next_content: "<p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/C8/720x-/-/-/ChOxM1wzSsCAWHBfAAICDD7qT9s236.jpg\" data-width=\"1024\" data-height=\"682\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/C8/ChOxM1wzSsCAWHBfAAICDD7qT9s236.jpg\" /></p>",
            bg_color: '#73a4e4'
          },
          {
            content: "<p><strong></strong></p><p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/C8/720x-/-/-/ChOxM1wzSsCAWHBfAAICDD7qT9s236.jpg\" data-width=\"1024\" data-height=\"682\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/AA/C8/ChOxM1wzSsCAWHBfAAICDD7qT9s236.jpg\" /></p><p><strong>国足本场比赛的最佳球员是？</strong></p><p><div id=\"vote_1966\" class=\"vote\" rel=\"1966\"></div></p><p><strong>你给国足本场比赛的表现打几分？</strong></p><p><div id=\"grade_1967\" class=\"grade\" rel=\"1967\"></div></p>",
            next_content: "<p>曼联在索尔斯克亚上任后取得一波五连胜，功勋主帅弗格森也应邀参观了球队训练。据《太阳报》报道，弗格森鼓励全体队员：“你们能让曼联重现辉煌。”</p>",
            bg_color: '#73e4c8'
          },
          {
            content: "<p>曼联在索尔斯克亚上任后取得一波五连胜，功勋主帅弗格森也应邀参观了球队训练。据《太阳报》报道，弗格森鼓励全体队员：“你们能让曼联重现辉煌。”</p><p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/91/C0/720x-/-/-/ChOxM1wDtfqAfFGuAAIEqOTQcSs229.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10\" data-width=\"400\" data-height=\"310\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/91/C0/ChOxM1wDtfqAfFGuAAIEqOTQcSs229.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xNzI=/dissolve/100/dx/20/dy/10\" /></p><p>知情人士告诉《太阳报》：“他告诉小伙子们，这支球队将让曼联重获统治力和成功。他说他相信他们，他希望他们能快乐，为彼此努力奋斗，把一切留在球场上。”</p><p>“他还告诉他们俱乐部目前管理得当，他保证在接下来这些年里，俱乐部会越做越大，越来越好，他们都将为这份成功做出贡献。”</p><p>“球员们都相信好日子就在前头。”</p><p>线人还告诉《太阳报》，这番话让球员们很振奋：“球员们希望回报弗爵爷的支持和亲切的话，决心在这赛季为他和索尔斯克亚赢得冠军。”</p>",
            next_content: "<p>巴西记者洛泽蒂声称，阿森纳向前球员埃杜发出了邀请，希望他回归俱乐部负责足球营运的事务。</p>",
            bg_color: '#96e473'
          },
          {
            content: "<p>巴西记者洛泽蒂声称，阿森纳向前球员埃杜发出了邀请，希望他回归俱乐部负责足球营运的事务。</p><p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/AB/6A/720x-/-/-/ChOxM1w0YjKAGQtrAAHn7crowMk770.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10\" data-width=\"400\" data-height=\"267\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/AB/6A/ChOxM1w0YjKAGQtrAAHn7crowMk770.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xNzA=/dissolve/100/dx/20/dy/10\" /></p><p>洛泽蒂在巴西人脉很广，而且跟巴西国家队关系密切，埃杜目前在巴西国家队中担任技术协调员。在2011年退役后，埃杜在科林蒂安担任过足球总监，在科林蒂安，埃杜跟现任巴西国家队主帅蒂特合作无间。在2016年蒂特成为巴西国家队主帅后，他邀请埃杜加入国家队继续辅助自己。</p><p>埃杜目前负责协调巴西国家队的事务，他还监督着所有年龄段的青年队，他被认为是蒂特的得力助手。对于巴西国家队的选人，埃杜也有很大的话事权。洛泽蒂表示，巴西足协已经知道阿森纳对埃杜感兴趣，但目前还不清楚埃杜是否会接受枪手的邀请。</p><p>埃杜是阿森纳当年在英超不败夺冠的成员之一，在5年的枪手生涯，他赢得过2次英超以及1次足总杯冠军。</p>",
            next_content: "<p>曾经分别效力过AC米兰和萨索洛的阿奎拉尼认为，斯特凡诺-森西对于红黑军团来说是正确的引援人选。</p>",
            bg_color: '#e4cd73'
          },
          {
            content: "<p>曾经分别效力过AC米兰和萨索洛的阿奎拉尼认为，斯特凡诺-森西对于红黑军团来说是正确的引援人选。</p><p><img src=\"https://img1.dongqiudi.com/fastdfs3/M00/97/F0/720x-/-/-/ChOxM1wPa_2AGHmxAAI30ddu-Os201.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10\" data-width=\"400\" data-height=\"268\" orig-src=\"https://img1.dongqiudi.com/fastdfs3/M00/97/F0/ChOxM1wPa_2AGHmxAAI30ddu-Os201.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xNzA=/dissolve/100/dx/20/dy/10\" /></p><p>“森西是米兰的正确人选？是的，因为斯特凡诺还年轻，他很有潜力，最近一段时间他进步了很多，他的踢球风格让我想起了维拉蒂。”阿奎拉尼在接受《米兰体育报》采访时说道。</p><p>“作为一名组织后腰，他有很棒的视野，尽管他的身体条件并不占优，不过如果你想要打造以传控为主的球队，他就是理想的人选。”</p><p>“加图索？球员时代他是更衣室的领袖之一，他是很有个性的人，他当教练我不会觉得意外，反倒是他的球队所展现出的组织性以及对攻势足球的追求让我觉得惊奇。”</p>",
            next_content: "",
            bg_color: '#7b73e4'
          }
        ]
      }
    },
    created () {
      
    },
    mounted () {
      // window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      next () {
        if(this.floorIndex >= this.floorData.length-1){
          return;
        }
        this.floorIndex ++ ;
      },
      // handleScroll() {
      //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      //   if (document.body.scrollHeight <= clientHeight + scrollTop) {
      //     if(this.floorIndex >= this.floorData.length-1){
      //       return;
      //     }
      //     this.floorIndex ++ ;
      //     window.scrollTo(0,0);
      //   }
      // },
      touchstart (event) {
        this.startY = event.touches[0].clientY;
        console.log('开始',this.startY);
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.allHeight = this.scrollTop + this.clientHeight;
      },
      touchmove (event) {
        this.currentY = event.touches[0].clientY;
        console.log('移动',this.currentY);
      },
      touchend (event) {
        this.endY = this.startY - this.currentY;
        console.log('结束',this.endY);
        let boxHeight = document.body.scrollHeight || this.$refs.floor.scrollHeight;
        if(this.endY > 50 && boxHeight <= this.allHeight){
          if(this.floorIndex >= this.floorData.length-1){
            return;
          }
          this.floorIndex ++;
        }
        if(this.endY < -50 && this.scrollTop <= 0){
          if(this.floorIndex <= 0){
            return;
          }
          this.floorIndex --;
        }
        console.log(this.scrollTop);
      },
    }
  }
</script>

<style lang="less">
@px2rem: 37.5rem;
*{
  padding: 0;
  margin: 0;
}
/* 动画样式  渐隐*/
.fade-enter-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.floor-box{
  width: 100%;
  min-height: 100%;
  h1{
    padding: 0 5%;
    font-size: 30px;
  }
  img{
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  p{
    padding: 0 5%;
    font-size: 14px;
    margin: 0 0 20px;
  }
  h2{
    padding: 0 5%;
    font-size: 18px;
  }
}
.next{
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  width: 40px;
  background-color: black;
  border-radius: 50%;
}
.next-contant{
  .line{
    border: 5px solid #ececec;
    margin: 20px 0;
  }
}
</style>

