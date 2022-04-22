<template>
  <div class="index_module_1">
    <title-box :title="title"/>
    <div class="content1">
      <div class="l">
        <div class="title"><span>关于我们</span><p>更安全、更有效的转院服务专家</p></div>
        <div class="remark">
          <p>{{remark}}</p>
          <p class="btnp"><router-link to="/" class="btn">了解详情</router-link></p>
        </div>
      </div>
      <div class="r">
        <img src="https://pic.letsfun.cn/pic/101460/al-img1.jpg" alt="">
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script setup>
import $ from 'jquery'
import { onMounted, reactive, ref } from 'vue'
import TitleBox from './title_module.vue'
let title = reactive({
  style: {
    color:'',
    width:'1200px',
    'margin':"0 auto",
    'text-align': "left"
  },
  title: '关于我们',
  subTitle: ''
})
let remark = ref('')
let getRemark = ()=>{
  remark.value = `哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥哔吥`
}
getRemark()
onMounted(()=>{
  $('.index_module_1 .content1 .r').height($('.index_module_1 .content1 .l').height()> 450 ? 450:$('.index_module_1 .content1 .l').height())
})
</script>

<style scoped>
.index_module_1{width: 100%;background-color: #fff;}
.index_module_1 .content1{width: 1200px;margin: 40px auto 0;}
.index_module_1 .content1 .l{float: left;width: 580px;box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);}
.index_module_1 .content1 .title{display: flex;height: 60px;padding: 0 20px;line-height: 60px; border-bottom: 2px solid #eee;}
.index_module_1 .content1 .title span{font-size: 24px;color: #c40000;margin-right: 20px;}
.index_module_1 .content1 .l .remark{padding: 20px;}
.index_module_1 .content1 .l .remark p:nth-of-type(1){font-size: 16px;line-height: 28px;}
.index_module_1 .content1 .l .remark .btnp{text-align: right;margin: 30px 0;}
.index_module_1 .content1 .l .remark .btn{display: inline-block; width: 120px;height: 40px;line-height: 40px;text-align: center;color: #fff;background-color: #c40000;}
.index_module_1 .content1 .r{float: right;width: 580px;}
.index_module_1 .content1 .r img{width: 100%;height: 100%;
object-fit: cover;object-position: center;
-o-object-fit: cover;-o-object-position: center;
-webkit-object-fit:cover;-webkit-object-position: center;
-moz-object-fit:cover;-moz-object-position: center;
}
</style>
