<template>
  <div id="app">
    <SideBar />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
// import request from "./api/request";
// import markdownIt from "markdown-it";
import SideBar from "./components/SideBar.vue";
// const md = markdownIt();
export default {
  components: {
    SideBar,
  },
  mounted() {
    // this.init();
    // this.articleList();
  },
  methods: {
    // init() {
    //   const markdownInput = `# 这是一段MARKDOWN代码\n\n## 不能换行?\n\n### 淦!`;
    //   // 将 Markdown 代码转换为 HTML 代码
    //   const htmlOutput = md.render(markdownInput);
    //   // 输出 HTML 代码到页面上
    //   document.getElementById("markdown-output").innerHTML = htmlOutput;
    // },
    // async articleList() {
    //   let res = await request.get("/api/articles/list");
    //   console.log(res);
    // },
  },
};
</script>

<style lang="less">
html, body{
  margin: 0;
  padding: 0;
}
* {
  // margin: 0;
  // padding: 0;
  box-sizing: border-box;
  // text-decoration: none;
  // color: #333;
  list-style: none;
}
#app {
  & > .main {
    // padding-left: 300px;
    padding: 1rem 1rem 1rem calc(300px + 1rem);
  }
}
</style>
