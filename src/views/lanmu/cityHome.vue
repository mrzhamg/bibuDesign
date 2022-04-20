<template>
  <div class="cityhome">
    <div class="content1">
      {{$route.params.city}}
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.cityhome{
  height: 2000px;
}
.content1{width: 1200px;margin: 0 auto;}
</style>
