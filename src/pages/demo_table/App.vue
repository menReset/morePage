<template>
  <div class="table">
    <!-- minirefresh开头的class请勿修改 -->
    <!-- <div id="minirefresh" class="minirefresh-wrap">
      <div class="minirefresh-scroll">

      </div>
    </div> -->
    <table>
      <thead>
        <tr>
          <td colspan="2">姓名</td>
          <td>语文</td>
          <td>英语</td>
          <td>数学</td>
        </tr>
      </thead>
      <tbody>
        <template v-for="(ele,index) in opList">
          <tr>
            <td class="td-name" rowspan="2"></td>
            <td class="username">张三</td>
            <td>55</td>
            <td>66</td>
            <td>77</td>
          </tr>
          <tr>
            <td class="username">李四</td>
            <td>88</td>
            <td>77</td>
            <td>66</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
  // import MiniRefreshTools from 'minirefresh';
  // import 'minirefresh/dist/debug/themes/applet/minirefresh.theme.applet.js';
  // import 'minirefresh/dist/debug/minirefresh.css';
  // // 引入任何一个主题后，都会有一个 MiniRefresh 全局变量
  // var miniRefresh = new MiniRefresh({
  //   container: '#minirefresh',
  //   down: {
  //     callback: function() {
  //       // 下拉事件

  //       miniRefresh.endDownLoading();
  //     }
  //   },
  //   up: {
  //     callback: function() {
  //       // 上拉事件

  //       // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
  //       miniRefresh.endUpLoading(true);
  //     }
  //   }
  // });
  export default {
    name: 'demo_transform',
    data() {
      return {
        opList: [1,1,1,1,1,1,1,1],
        abc: {
          a:2,
          b:3,
          c:4
        }
      }
    },
    created() {
      // // 引入任何一个主题后，都会有一个 MiniRefresh 全局变量
      // var miniRefresh = new MiniRefresh({
      //   container: '#minirefresh',
      //   down: {
      //     callback: function() {
      //       // 下拉事件

      //       miniRefresh.endDownLoading();
      //     }
      //   },
      //   up: {
      //     callback: function() {
      //       // 上拉事件

      //       // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
      //       miniRefresh.endUpLoading(true);
      //     }
      //   }
      // });
    },
    mounted() {
      var abc = {
        a:2,
        b:3,
        c:4
      }
      var arr = [1,2,3,4,5,6,7]
      var arr2 = [{'a':'2'},{'b':'4'}];
      // console.log([...arr2]);

      let arrayLike = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
      length: 3
      };
      // TypeError: Cannot spread non-iterable object.
      // console.log([...arrayLike]);
    },
    methods: {

    }
  }
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  min-height: 100%;
}
*:not(html) {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
.table{
  width: 100%;
}
table{
  width: 100%;
  border-collapse: collapse;
  thead{
    tr{
      text-align: center;
      td{
        min-width: 25%;
      }
    }
  }
  tbody{
    tr{
      text-align: center;
      td{
        min-width: 20%;
      }
      .td-name{
        position: relative;
        width: 20%;
        background-color: blue;
      }
    }
    tr:nth-of-type(4n+3){
      background-color: #f5f5f5;
    }
    tr:nth-of-type(4n+4){
      background-color: #f5f5f5;
    }
    tr:nth-of-type(4n+1){
      background-color: pink;
    }
    tr:nth-of-type(4n+2){
      background-color: pink;
    }
    .username{
      background-color: greenyellow;
    }
  }
}
</style>
