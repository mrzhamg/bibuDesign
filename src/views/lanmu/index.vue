<template>
  <div class="lanmu">
    <lanmu-header-box/>
    <div class="mian">
      <router-view></router-view>
    </div>
    <RightBox/>
    <footer-box/>
  </div>
</template>

<script>
import LanmuHeaderBox from '../../components/index/lanmuHeader.vue'
// import RightBox from '../../components/index/right.vue'
import FooterBox from '../../components/index/footer.vue'
export default {
  name:'lanmuView',
  components:{
    LanmuHeaderBox,
    FooterBox,
    // RightBox
  }
}
</script>

<style scoped>
.lanmu{
  height: 100%;
  overflow-y: scroll;
}
</style>
