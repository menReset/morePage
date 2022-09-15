<template>
  <div class="vueRouter">
    <h2>vueRouter demo</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "vueRoutervueRouter",
  data() {
    return {};
  },
  beforeCreate() {
    //beforeCreate 创建前状态
  },
  created() {
    //created 创建完毕状态
  },
  beforeMount() {
    //beforeMount 挂载前状态
  },
  mounted() {
    //mounted 挂载结束状态
  },
  beforeUpdate() {
    //beforeUpdate 更新前状态
  },
  updated() {
    //updated 更新完成状态
  },
  beforeDestroy() {
    //beforeDestroy 销毁前状态
  },
  destroyed() {
    //destroyed 销毁完成状态
  },
  methods: {},
};
</script>

<style>
.vueRouter {
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
