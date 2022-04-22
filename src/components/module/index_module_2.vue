<template>
  <div class="index_module_2">
    <title-box :title="title"/>
    <div class="content1">
      <el-carousel indicator-position="outside" arrow="never" height="450px" :autoplay="false">
        <el-carousel-item v-for="item in index_module_2_DataList" :key="item">
          <ul class="list">
            <li v-for="i in item" :key="i.index">
              <router-link to="/">
                <img :src="i.pic" alt="">
                <p>{{i.title}}</p>
              </router-link>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import TitleBox from './title_module.vue'
let title = reactive({
  style:{
    width: '1200px',
    margin:'0 auto',
    'text-align':'left'
  },
  title:'标题标题标题标题',
  subTitle:'标题标题标题标题'
})
let index_module_2_DataList = reactive(
  [
    [{
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    }],
    [{
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    },
    {
      pic: "https://pic.letsfun.cn/pic/101460/al-img1.jpg",
      title: "名称名称名称名称"
    }]
  ])

</script>

<style scoped>
.index_module_2{width: 100%;background-color: #fff;margin-bottom: 50px;}
.index_module_2 .content1{width: 1200px;margin: 40px auto 0;} 
:deep(.el-carousel__button){background-color: #c40000;}
.list li{width: 285px; float: left;margin-right: 20px;margin-bottom: 20px;}
.list li img{width: 100%;height: 100%;
object-fit: cover;object-position: center;
-o-object-fit: cover;-o-object-position: center;
-webkit-object-fit:cover;-webkit-object-position: center;
-moz-object-fit:cover;-moz-object-position: center;
}
.list li:nth-of-type(4n){margin-right: 0;}
.list li p{text-align: center;color: #000;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
.list li:hover p{color: #c40000;}
</style>