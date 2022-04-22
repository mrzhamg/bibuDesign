<template>
  <div class="index_module_3">
    <title-box :title="title"/>
    <div class="content1">
      <div class="left">
        <router-link to="/">
          <img src="https://pic.letsfun.cn/pic/101460/al-img1.jpg" alt="">
          <p>标题标题标题标题</p>
        </router-link>
      </div>
      <div class="center">
        <p class="title"><span>咨询最新</span><router-link to="/">更多></router-link></p>
        <ul>
          <li v-for="(item,index) in zx_list.slice(0,5)" :key="item.index">
            <router-link to="/"><span>{{item.title}}</span><span>{{item.createTime}}</span></router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="img">
          <img src="https://pic.letsfun.cn/pic/101460/al-img1.jpg" alt="">
          <p><span>常见问题</span><span>MORE+</span></p>
        </div>
        <swiper :direction="'vertical'"
        :autoplay="{delay:1000}"
        slidesPerView="auto"
        >
          <swiper-slide v-for="item in zx_list" :key="item.index">
            <router-link to="/">
              <p class="wen"><span><i>问</i>{{item.title}}</span><span>{{item.createTime}}</span></p>
              <p class="da"><i>答</i><span>{{item.subTitle}}</span></p>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script setup>
import SwiperCore, { Autoplay, EffectCoverflow ,A11y} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Autoplay,EffectCoverflow, A11y]);
import { reactive } from '@vue/reactivity'
import TitleBox from './title_module.vue'
let title = reactive({
  title:'标题标题标题',
  subTitle:'标题标题标题',
})
let zx_list = reactive([
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题',subTitle:'标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'}
  ])

</script>

<style scoped>
.index_module_3{width: 100%;background-color: #fff;}
.index_module_3 .content1{width: 1200px;margin: 40px auto 0;display: flex;justify-content: space-between;}
.index_module_3 .content1 div{width: 390px;}
.index_module_3 .content1 div.left{position: relative;height: 307px;}
.index_module_3 .content1 div.left a img{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
object-fit: cover;object-position: center;
-o-object-fit: cover;-o-object-position: center;
-webkit-object-fit:cover;-webkit-object-position: center;
-moz-object-fit:cover;-moz-object-position: center;
}
.index_module_3 .content1 div.left a p{position: absolute;width: 100%;box-sizing: border-box;padding: 0 20px; bottom: 0;background-color: rgba(0, 0, 0, 0.5); line-height: 50px;color: #fff;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
.index_module_3 .content1 div.center{border: 1px solid #eee;}
.index_module_3 .content1 div.center .title{line-height: 50px; display: flex;justify-content: space-between;align-items: center;padding: 0 15px;border-bottom:1px solid #eee;}
.index_module_3 .content1 div.center .title span{font-size: 14px;}
.index_module_3 .content1 div.center .title a{font-size: 14px;color: black;}
.index_module_3 .content1 div.center ul li{position: relative;line-height: 50px;}
.index_module_3 .content1 div.center ul li a{display: flex;justify-content: space-between;align-items: center;padding: 0 10px 0 25px;color: #666;}
.index_module_3 .content1 div.center ul li::after{position: absolute;left: 10px;top: 20px; content: '';display: inline-block;width: 0;height: 0;border: 5px solid #c40000;}
.index_module_3 .content1 div.center ul li a span:nth-of-type(1){width: 200px;font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.index_module_3 .content1 div.right{border: 1px solid #eee;}
.index_module_3 .content1 div.right .img{width: 100%;height:100px;position: relative;}
.index_module_3 .content1 div.right .img img{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
object-fit: cover;object-position: center;
-o-object-fit: cover;-o-object-position: center;
-webkit-object-fit:cover;-webkit-object-position: center;
-moz-object-fit:cover;-moz-object-position: center;
}
.index_module_3 .content1 div.right .img p{width: 100%;box-sizing: border-box;line-height: 40px; position: absolute;left: 0;bottom: 0; padding: 0 20px;display: flex;justify-content: space-between;background-color: rgba(255, 0, 0, 0.5);color: #fff;}
.index_module_3 .content1 div.right .swiper{height: 200px;}
.index_module_3 .content1 div.right .swiper::v-deep .swiper-slide{height: 90px !important;border-bottom: 1px dashed #888;padding: 10px 0;}
.index_module_3 .content1 div.right .swiper .swiper-slide a p{font-size: 16px;padding: 0px 10px;display: flex;margin: 5px 0;}
.index_module_3 .content1 div.right .swiper .swiper-slide a p:nth-of-type(1){justify-content: space-between;align-items: center;}
.index_module_3 .content1 div.right .swiper .swiper-slide a p:nth-of-type(1) span:nth-of-type(1){display: inline-block;width: 200px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
.index_module_3 .content1 div.right .swiper .swiper-slide a p:nth-of-type(1) i,
.index_module_3 .content1 div.right .swiper .swiper-slide a p:nth-of-type(2) i{display: inline-block;width: 30px;height: 30px;line-height: 30px;background-color: #c40000;text-align: center;color: #fff;border-radius: 5px;margin-right: 10px;}
.index_module_3 .content1 div.right .swiper .swiper-slide a p:nth-of-type(1) i{background-color: #888;}
.index_module_3 .content1 div.right .swiper .swiper-slide a p:nth-of-type(2) span{flex: 1;line-height: 28px;}
</style>
