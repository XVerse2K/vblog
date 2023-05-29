<template>
  <div class="article-detail">
    <h2>文章详情</h2>
    <h2>标题: {{ article.article_title }}</h2>
    <h2>作者: {{ article.article_author }}</h2>
    <h2>时间: {{ article.article_createtime }}</h2>
    <h2>内容:</h2>
    <hr style="margin-bottom: 1rem" />
    <div v-html="hh" id="markdown-output"></div>
    <!-- <h3>{{ article.article_content }}</h3> -->
  </div>
</template>

<script>
import request from "@/api/request";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // 引入样式文件
const marked = require("marked");
marked.setOptions({
  breaks: true,
});
export default {
  data() {
    return {
      article: `default`,
      hh: "",
    };
  },
  async mounted() {
    await this.getArticle();
    this.init(this.article.article_content);
  },
  methods: {
    // 2409:8a44:6015:3ca0:a051:ae66:fd75:f0e8
    async getArticle() {
      let res = await request.get("/api/articles/detail", {
        params: {
          article_id: this.$route.query.article_id,
        },
      });
      console.log(res.data.data[0]);
      this.article = res.data.data[0];
    },
    init(detail) {
      console.log(detail);
      let final = ``;
      final += detail.replaceAll(
        "\\n",
        `
`
      );
      console.log(final);
      console.log(marked.marked(final));
      this.hh = marked.marked(final, {
        highlight(code) {
          return hljs.highlightAuto(code).value;
        },
      });
    },
  },
};
</script>

<style lang="less">
#markdown-output {
  background-color: #23272e;
  color: #abb2bf;
  padding: 1rem;
  border-radius: 0.5rem;
  pre {
    padding: 1rem;
    // border: 1px solid #abb2bf;
    background-color: #191c20;
    border-radius: 0.5rem;
    font-size: 16px;
    line-height: 24px;
    code {
      font-family: "Cascadia Code";
    }
  }
}
</style>
