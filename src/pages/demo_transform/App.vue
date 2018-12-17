<template>
  <div class="demo_transform">
    <div class="box4">
      z-index: 3
      <!-- <div class="box5"></div> -->
    </div>
    <div class="box1">
      z-index: 2
    </div>
    <!-- <table>
      <thead>
        <tr class="no-border gray">
          <th rowspan="2" colspan="2" class="no-left bold" width="22%">公司</th>
          <th colspan="3" class="bold no-top no-bottom no-left th-top">赔率</th>
          <th colspan="3" class="no-border bold th-top">凯利指数</th>
        </tr>
        <tr class="no-border gray">
          <th class="no-left no-right no-top th-bottom" width="13%">主胜</th>
          <th class="no-left no-right no-top th-bottom" width="12%">平局</th>
          <th class="no-left no-top th-bottom" width="12%">客胜</th>
          <th class="no-left no-right no-top th-bottom" width="13%">主胜</th>
          <th class="no-left no-right no-top th-bottom" width="13%">平局</th>
          <th class="no-left no-right no-top table-right th-bottom" width="15%">客胜</th>
        </tr>
      </thead>
      <tbody class="op">
        <template v-for="(item, index) in opList">
          <tr class="no-border" :class="item.cid ? '' : 'no'">
            <td rowspan="2" class="no-border td-hide td-name td-white">bet365</td>
            <td class="no-border gray td-text td-name">初</td>
            <td class="no-top no-bottom no-right"></td>
            <td class="no-border"></td>
            <td class="no-border"></td>
            <td class="no-top no-bottom no-right"></td>
            <td class="no-border"></td>
            <td class="no-border top table-right"></td>
          </tr>
          <tr class="no-border" :class="item.cid ? '' : 'no'">
            <td class="no-border gray td-text td-name td-white">即</td>
            <td class="no-top no-bottom no-right td-white">
              
            </td>
            <td class="no-border td-white">
              
            </td>
            <td class="no-border td-white">
              
            </td>
            <td class="no-top no-bottom no-right td-white">
              
            </td>
            <td class="no-border td-white">
              
            </td>
            <td class="no-border bottom table-right td-white">
              
            </td>
          </tr>
        </template>
      </tbody>
    </table> -->
  </div>
</template>

<script>
  export default {
    name: 'demo_transform',
    data() {
      return {
        opList: [1,1,1,1,1,1,1,1]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
  }

</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }

  *:not(html) {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  .box1 {
    position: relative;
    top: -80px;
    width: 600px;
    height: 400px;
    background-color: yellowgreen;
    z-index: 2;
    margin-left: 20px;
  }

  .box4 {
    position: relative;
    width: 600px;
    height: 400px;
    background-color: #ff0000;
    z-index: 3;
  }

  .box5 {
    position: relative;
    top: 20px;
    left: 50px;
    width: 600px;
    height: 400px;
    background-color: pink;
    // z-index: 7;
  }


@dqdgreen: #16b13a;
@dqdred: #e0371b;
html {
  min-width: 300px;
}
html,
body {
  min-height: 100%;
  background: #ececec;
}
*:not(html) {
  -webkit-transform: translate3d(0, 0, 0);
}
.demo_transform{
  -webkit-transform: translate3d(0, 0, 0);
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  color: #000;
}
thead {
  background: #f5f5f5;
}
tr,
th,
td {
  font-size: 12px;
  line-height: 31px;
  font-weight: normal;
  text-align: center;
  border: 1px solid #ddd;
  color: inherit;
}
.th-top,
.th-bottom {
  line-height: 22px;
}
.th-top {
  padding-top: 5px;
}
.th-bottom {
  padding-bottom: 5px;
}
tbody.yp tr:nth-of-type(2n),
tbody.dxq tr:nth-of-type(2n) {
  background: #f5f5f5;
}
tbody.op tr:nth-of-type(4n + 3) {
  background: #f5f5f5;
}
tbody.op tr:nth-of-type(4n + 4) {
  background: #f5f5f5;
}
tbody.op tr:nth-of-type(4n + 1) {
  background: #fff;
}
tbody.op tr:nth-of-type(4n + 2) {
  background: #fff;
}
.yp tr td,
.dxq tr td {
  border-bottom: 1px solid #fff;
}
.no-left {
  border-left: none;
}
.no-right {
  border-right: none;
}
.no-top {
  border-top: none;
}
.no-bottom {
  border-bottom: none;
}
.no-border {
  border: none;
}
.gray {
  color: #888;
}
.bold {
  font-weight: normal;
}
.red {
  color: @dqdred;
}
.no .red {
  color: inherit;
}
.green {
  color: @dqdgreen;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.odds-tab-con {
  background: #fff;
}
.odds-tab {
  width: 82%;
  padding: 15px 0;
  margin: 0 auto;
  li {
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    border: 1px solid @dqdgreen;
    border-right: none;
    color: @dqdgreen;
  }
  li:nth-of-type(3) {
    border-right: 1px solid @dqdgreen;
  }
  li.active {
    background: @dqdgreen;
    color: #fff;
  }
}
.odds-table {
  position: relative;
  .table-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: #ddd;
  }
  .table-line.top {
    top: 0;
  }
  .table-line.bottom {
    bottom: 0;
  }
}
th.table-right {
  background-image: none;
}
.no {
  .table-right.top {
    background-image: none;
  }
  .table-right.bottom {
    background-image: none;
  }
}
.odds-no {
  margin-top: 170px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #9b9b9b;
}
.odds-no.short {
  margin-top: 70px;
}
.td-hide {
  max-width: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.td-text {
  padding-right: 4px;
}
.td-name {
  position: relative;
  background: #e7f7eb;
}
.td-white {
  border-bottom: 1px solid #fff;
}
</style>
