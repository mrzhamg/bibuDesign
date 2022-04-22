<template>
  <div class="index_module_4">
    <div class="content1">
      <div>
        <div class="l_box">
          <p><span>医院转运</span><router-link to="/">更多></router-link></p>
          <ul>
            <li v-for="item in al_list.slice(0,8)" :key="item.index"><router-link to="/"><span>{{item.title}}</span><span>{{item.createTime}}</span></router-link></li>
          </ul>
        </div>
        <div class="r_box">
          <p><span>康复回家</span><router-link to="/">更多></router-link></p>
          <ul>
            <li v-for="item in al_list.slice(0,8)" :key="item.index"><router-link to="/"><span>{{item.title}}</span><span>{{item.createTime}}</span></router-link></li>
          </ul>
        </div>
      </div>
      <!-- <div>预留位置：</div> -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

let al_list = reactive([
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  {title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',createTime:'2022/04/22'},
  ])
</script>

<style lang="less" scoped>
.index_module_4{
  width: 100%;
  background-color: #fff;
  margin-bottom: 50px;
  .content1{
    width: 1200px;
    margin: 40px auto 0;
    &>div:nth-of-type(1){
      display: flex;
      justify-content: space-between;
      div{
        width: 580px;
        p{
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          span{font-size: 24px;}
          a{color: #888;}
        }
        ul{
          border: 1px solid #eee;
          padding:0 10px;
          li{
            line-height: 45px;
            position: relative;
            padding-left: 20px;
            border-bottom: 1px solid #eee;
            &:last-of-type{border: 0;}
            ::after{
              position: absolute;
              left: 0;
              top: 50%;
              content: '';
              display: inline-block;
              width: 10px;
              height: 10px;
              margin: -5px 0;
              border-radius: 50%;
              background-color: #c40000;
            }
            a{
              display: flex;
              justify-content: space-between;
              align-items: center;
              span:nth-of-type(1){display: inline-block;width: 400px;color: black;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              span:nth-of-type(2){color: #888;}
            }
            &:hover{
              a{
                span:nth-of-type(1){color: #c40000;}
              }
            }
          }
          
        
        }
      }
    }
    &>div:nth-of-type(2){
      margin-top: 10px;
      height: 40px;
      color: #fff;
      background-color: #c40000;
    }
  }
}
</style>

