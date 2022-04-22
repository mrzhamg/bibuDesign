<template>
  <div class="index_module_5">
    <div class="content1">
      <div class="l">
        <el-carousel arrow="never">
          <el-carousel-item v-for="item in img_list.slice(0,2)" :key="item">
            <img :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="r">
        <div class="icon_box">
          <ul>
            <li v-for="item in icon_box_list" :key="item.index">
              <i :style="{'background':'url('+item.icon+')no-repeat center center'}"></i>
              <p>{{item.title}}</p>
              <p>{{item.subTitle}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

let img_list = reactive([
  {img:'https://pic.letsfun.cn/pic/101460/al-img1.jpg'},
  {img:'https://pic.letsfun.cn/pic/101460/al-img1.jpg'}
])

let icon_box_list = reactive([
  {title:'已成功护送',subTitle:'230977 位患者',icon:'/src/assets/img/form_img1.png'},
  {title:'救护转运过',subTitle:'76992 家医院',icon:'/src/assets/img/form_img2.png'},
  {title:'具备转运车辆',subTitle:'527 辆',icon:'/src/assets/img/form_img3.png'}
])
</script>

<style lang="less" scoped>
.index_module_5{
  width: 100%;
  background-color: #fff;
  margin-bottom: 50px;
  .content1{
    width: 1200px;
    margin: 40px auto 0;
    display: flex;
    justify-content: space-between;
    :deep(.el-carousel){
      width: 530px;
      height: 395px;
      .el-carousel__container{
        height: 100% !important;
        .el-carousel__item{
          img{width: 100%;height: 100%;
          object-fit: cover;object-position: center;
          -o-object-fit: cover;-o-object-position: center;
          -webkit-object-fit:cover;-webkit-object-position: center;
          -moz-object-fit:cover;-moz-object-position: center;
          }
        }
      }
      
    }
    :deep(.el-carousel__button){height: 5px; background-color: #c40000;}
    .r{
      width: 640px;
      height: 395px;
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
      .icon_box{
        ul{
          display: flex;
          align-items: center;
          justify-content: space-between;
          li{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{display: inline-block;width: 30px;height: 30px;margin-bottom: 10px;}
            p{
              font-size: 14px;
              color: #666;
            }
            p:nth-of-type(2){color: #c40000;}
          }
        }
      }
    }
  }
}
</style>
