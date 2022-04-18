<template>
  <div class="footerBox">
    <div>
      <div class="friends">
        <ul>
          <li><a href="">友情链接</a></li>
        </ul>
        <div class="sqyoulian">申请友链交换QQ：<span>3327464163</span></div>
      </div>
      <div class="fangwenwang">
        <ul>
          <li><a href="">120问医网</a></li>
        </ul>
      </div>
      <div class="navBottom">
        <ul>
          <li><a href="">关于我们</a></li>
          <li><a href="">我要推广</a></li>
          <li><a href="">删除信息</a></li>
          <li><a href="">帮助中心</a></li>
          <li><a href="">招贤纳士</a></li>
          <li><a href="">联系我们</a></li>
        </ul>
      </div>

    </div>
    <div class="copyright">
      <div>
        <p>小微救护是一家正规的120私人救护车出租公司，为您提供专业的市内医院转诊转运，跨市跨省转院，全国长途转运，国际医疗包机，活动赛事医疗保障等24小时救护车出租服务</p>
        <p>版权归：<span>XXXXXXX公司</span>所有 <span>粤ICP备XXXXXXXXXXX号</span></p>
        <p>本站部分素材来自网络整理发布，如有侵权请立即联系我们，我们将于24小时内及时处理。<span>联系邮箱：XXXXXXXX@qq.com</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBox'
}
</script>

<style lang="less" scoped>
.footerBox {
  width: 100%;
  margin-top: 20px;
  div {
    width: 1200px;
    margin: 0 auto;
    .friends {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #888;
      padding-bottom: 5px;
      ul {
        li {
          float: left;
          width: 89px;
          height: 37px;
          line-height: 37px;
          text-align: center;
          cursor: pointer;
          color: #666;
          background: #cc0000;
          color: #fff;
          a {
            color: #fff;
          }
        }
      }
      div {
        width: auto;
        margin: 0;
      }
    }
    .fangwenwang {
      padding-bottom: 5px;
      ul {
        li {
          float: left;
          width: 89px;
          height: 37px;
          line-height: 37px;
          text-align: center;
          cursor: pointer;
          color: #666;
          a {
            color: #000;
          }
        }
      }
    }
    .navBottom {
      width: 100%;
      height: 80px;
      clear: both;
      margin: 20px 0;
      line-height: 80px;
      ul {
        display: flex;
        justify-content: center;
        li {
          float: left;
          margin: 0 20px;
          a {
            color: #000;
          }
        }
      }
    }
  }
  .copyright {
    width: 100%;
    background-color: #000;
    font-size: 12px;
    color: #fff;
    div {
      padding: 20px 0;
      p {
        line-height: 24px;
      }
    }
  }
}
</style>
