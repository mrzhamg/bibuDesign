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

<script setup>
import LeaderBox from '../../components/index/header.vue'
import LanmuNavBox from '../../components/index/lanmuNav.vue'
import RightBox from '../../components/index/right.vue'
import FooterBox from '../../components/index/footer.vue'
import Header from '../../components/Header.vue'

</script>

<style scoped>
.lanmu{
  height: 100%;
  overflow-y: scroll;
}
</style>
