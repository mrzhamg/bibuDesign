<template>
  <div class="cityhome">
    <div class="content1">
      <!-- {{$route.params.city}} -->
    </div>
    <module-5/>
    <module-4/>
    <module-3/>
    <module-2/>
    <module-1/>
  </div>
</template>

<script setup>
import Module5 from '../../components/module/index_module_5.vue'
import Module4 from '../../components/module/index_module_4.vue'
import Module3 from '../../components/module/index_module_3.vue'
import Module2 from '../../components/module/index_module_2.vue'
import Module1 from '../../components/module/index_module_1.vue'
</script>

<style scoped>
.cityhome{
  /* height: 2000px; */
}
.content1{width: 1200px;margin: 0 auto;}
</style>
