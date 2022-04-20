<template>
  <div class="lanmuheader">
    <div class="lm_header">
      <div class="logo"></div>
      <div class="guanggao">广告语</div>
      <div class="tel">咨询热线：13888888888</div>
    </div>
    <div style="clear: both;"></div>
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
.lm_header{width: 1200px;margin: 0 auto;line-height: 120px;}
.lm_header .logo{float: left; width: 200px;height: 120px;background: url(../../assets/img/bibu.200.png)no-repeat center center;background-size: 80%;}
.lm_header .guanggao{float: left;font-size: 32px;}
.lm_header .tel{float: right;}
.lanmuheader .nav{width: 100%;}
.lanmuheader .nav ul{width: 1200px;margin: 0 auto;display: flex;align-items: center;}
.lanmuheader .nav ul li{flex: 1;height: 60px;line-height: 60px;background-color: #c40000;text-align: center;}
.lanmuheader .nav ul li a{display: inline-block;width: 100%;height: 100%; color: #fff;}
</style>