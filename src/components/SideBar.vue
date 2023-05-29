<template>
  <div class="side-bar">
    <ul>
      <li v-for="route in this.visibleRoutes" :key="route.index">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  computed: {
    visibleRoutes() {
      return this.routes.filter(route => route.meta.visible);
    },
  },
  mounted() {
    // console.log(this.$router.options.routes);
  },
};
</script>
<style lang="less" scoped>
.side-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #0078d4;
  ul {
    li {
      padding: 1rem 1rem 0 1rem;
      a {
        font-size: 24px;
        color: #fff;
      }
    }
  }
}
</style>
