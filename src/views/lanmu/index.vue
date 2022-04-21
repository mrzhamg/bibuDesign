<template>
  <div class="lanmu">
    <leader-box/>
    <lanmu-nav-box/>
    <div class="mian">
      <router-view></router-view>
    </div>
    <RightBox/>
    <footer-box/>
  </div>
</template>

<script>
import LeaderBox from '../../components/index/header.vue'
import LanmuNavBox from '../../components/index/lanmuNav.vue'
import RightBox from '../../components/index/right.vue'
import FooterBox from '../../components/index/footer.vue'
import Header from '../../components/Header.vue'
export default {
  name:'lanmuView',
  components:{
    LeaderBox,
    LanmuNavBox,
    FooterBox,
    Header,
    RightBox
  }
}
</script>

<style scoped>
.lanmu{
  height: 100%;
  overflow-y: scroll;
}
</style>
