<template>
  <div class="home">
    <h1>This is an home page</h1>
    <ArticleList />
  </div>
</template>
<script>
import ArticleList from "../components/HomeView/ArticleList.vue";
export default {
  components: {
    ArticleList,
  },
};
</script>
