<template>
  <div class="article-list">
    <h2>文章列表</h2>
    <ul>
      <li v-for="article in articles" :key="article.article_id">
        <a href="javascript:;" @click="toDetail(article.article_id)">{{
          article.article_title
        }}</a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped></style>
<script>
import request from "@/api/request";
export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.getArticleList();
  },
  methods: {
    async getArticleList() {
      let res = await request.get("/api/articles/list");
      console.log(res.data.data);
      this.articles = res.data.data;
    },
    // async getArticle() {
    //   let res = await request.get("/api/articles/detail");
    //   console.log(res.data.data);
    // },
    toDetail(article_id) {
      this.$router.push({
        path: "/detail",
        query: {
          article_id,
        },
      });
    },
  },
};
</script>
