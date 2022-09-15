<template>
  <div class="routerDemo">
    <router-link to="/foo"> 路由到 foo</router-link>
    <br />
    <router-link to="/user/12"> 路由到 user/12</router-link>
    <br />
    <router-link to="/user/12/profile"> 路由到 user/12/profile</router-link>
    <br />
    <router-link to="/other"> 路由到 404</router-link>
    <br />
    <router-link to="/a"> 路由到 a 重定向到 bar</router-link>
    <br />
    <a href="#/foo"> a链接跳转到foo</a>
    <br />
    <button
      @click="
        $router.push({
          path: '/foo',
          query: {
            a: 1,
            b: 2,
          },
        })
      "
    >
      使用push 路由到foo
    </button>
    <br />
    <h3>id: {{ id }}</h3>
    <h3>{{ routerInfo }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "routerDemo",
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route;
      return {
        fullPath,
        path,
        name,
        params,
        query,
        meta,
      };
    },
  },
};
</script>

<style>
.routerDemo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>