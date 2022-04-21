<template>
  <div class="cityhome">
    <div class="content1">
      {{$route.params.city}}
    </div>
    <module-1/>
  </div>
</template>

<script>
import Module1 from '../../components/module/index_module_1.vue'
export default {
  name: 'cityhome',
  components:{
    Module1,
  }
  
}
</script>

<style scoped>
.cityhome{
  /* height: 2000px; */
}
.content1{width: 1200px;margin: 0 auto;}
</style>
