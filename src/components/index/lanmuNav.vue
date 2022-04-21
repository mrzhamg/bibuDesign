<template>
  <div class="lanmuheader">
    <div class="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">医院转运</router-link></li>
        <li><router-link to="/">康复回家</router-link></li>
        <li><router-link to="/">服务优势</router-link></li>
        <li><router-link to="/">关于我们</router-link></li>
        <li><router-link to="/">新闻资讯</router-link></li>
        <li><router-link to="/">联系我们</router-link></li>
        <li><router-link to="/">信客</router-link></li>
      </ul>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<style scoped>
.lanmuheader .nav{width: 100%;background-color: #c40000;}
.lanmuheader .nav ul{width: 1200px;margin: 0 auto;display: flex;align-items: center;}
.lanmuheader .nav ul li{flex: 1;height: 60px;line-height: 60px;background-color: #c40000;text-align: center;}
.lanmuheader .nav ul li a{display: inline-block;width: 100%;height: 100%; color: #fff;}
</style>