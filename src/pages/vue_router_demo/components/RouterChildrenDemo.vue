<template>
  <div class="routerChildren">
    {{ routerInfo }}
  </div>
</template>

<script>
export default {
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