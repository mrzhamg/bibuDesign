<template>
  <div class="index">
    <headerBox></headerBox>
    <bannerBox></bannerBox>
    <router-view />
    <right-box />
    <footerBox></footerBox>
  </div>
</template>

<script>
import headerBox from '../../components/index/header.vue'
import bannerBox from '../../components/index/banner.vue'
import rightBox from '../../components/index/right.vue'
import footerBox from '../../components/index/footer.vue'
import { onMounted, ref } from '@vue/runtime-core'
export default {
  name: 'index',
  components: {
    headerBox,
    bannerBox,
    rightBox,
    footerBox
  },
  setup () {
    return {}
  }
}
</script>

<style scoped>
.index {
  height: 100%;
  font-size: 14px;
  overflow-y: auto;
}
</style>
