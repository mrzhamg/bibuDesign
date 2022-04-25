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
        <!-- 表单 -->
        <el-form
          label-position="left"
          label-width="100px"
          :model="form_5"
          style="max-width: 550px;margin:20px auto;text-align:center;"
        >
          <el-form-item :label="form_5.time.title">
            <el-date-picker
              v-model="form_5.time.data"
              type="datetime"
              placeholder=""
              prefix-icon="el-icon-alarm-clock"
            />
          </el-form-item>
          <el-form-item :label="form_5.origin.title">
            <el-input prefix-icon="el-icon-location-outline" v-model="form_5.origin.data" />
          </el-form-item>
          <el-form-item :label="form_5.destination.title">
            <el-input prefix-icon="el-icon-map-location" v-model="form_5.destination.data" />
          </el-form-item>
          <el-form-item :label="form_5.name.title">
            <el-input prefix-icon="el-icon-user" v-model="form_5.name.data" />
          </el-form-item>
          <el-button @click="submitForm(form_5)">立即预约</el-button>
        </el-form>
        <!-- 表单end -->
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

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { ElMessage } from "element-plus";

let img_list = reactive([
  {img:'https://pic.letsfun.cn/pic/101460/al-img1.jpg'},
  {img:'https://pic.letsfun.cn/pic/101460/al-img1.jpg'}
])

let icon_box_list = reactive([
  {title:'已成功护送',subTitle:'230977 位患者',icon:'/src/assets/img/form_img1.png'},
  {title:'救护转运过',subTitle:'76992 家医院',icon:'/src/assets/img/form_img2.png'},
  {title:'具备转运车辆',subTitle:'527 辆',icon:'/src/assets/img/form_img3.png'}
])
const form_5 = reactive<{time:Object,origin:Object,destination:Object,name:Object}>({
  time:{
    title:'预约时间',
    data:''
  },
  origin:{
    title:'出发地',
    data:''
  },
  destination:{
    title:'目的地',
    data:''
  },
  name:{
    title:'您的昵称',
    data:''
  },
})

let submitForm = (ruleFormRef) => {
  // console.log(new Date())
  if(!ruleFormRef.time.data){
    ElMessage({type:'error',message:`${ruleFormRef.time.title}不能为空！`})
  }else if(!ruleFormRef.origin.data){
    ElMessage({type:'error',message:`${ruleFormRef.origin.title}不能为空！`})
  }else if(!ruleFormRef.destination.data){
    ElMessage({type:'error',message:`${ruleFormRef.destination.title}不能为空！`})
  }else if(!ruleFormRef.name.data){
    ElMessage({type:'error',message:`${ruleFormRef.name.title}不能为空！`})
  }else{
    ElMessage({type:'success',message:'预约成功！'})
    setTimeout(()=>{location.reload()},200)
  }
}
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
      padding: 0 10px;box-sizing: border-box;
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
      :deep(.el-form--label-left .el-form-item__label){height: 36px;line-height: 36px;padding-right: 0; text-align: center;border: 1px solid #DCDFE6;border-right: 0;}
      :deep(.el-input__inner){
        height: 36px;
        line-height: 36px;
        border-radius: 0;
      }
      :deep(.el-button){width: 400px;min-height: 36px; background-color: #c40000;border: 0;color: #fff;margin: 20px 0 5px 0;}
      :deep(.el-form-item){margin: 15px 0 0 0;height: 36px;line-height: 36px;align-items: center;}
      :deep(.el-date-editor.el-input, .el-date-editor.el-input__inner){width: 450px;}
      .icon_box{border-top: 1px dashed #e0e0e0;padding-top:10px;
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
            i{display: inline-block;width: 30px;height: 30px;margin-bottom: 5px;}
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
