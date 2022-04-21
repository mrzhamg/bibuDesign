<template>
  <div class="titleBox" :style="title.style">
    <h1>{{title.title}}</h1>
    <p>{{title.subTitle}}</p>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { defineProps } from "@vue/runtime-core";
const props = defineProps({
  title:{
    type: Object,
    default: ()=>{}
  }
})
</script>

<style scoped>
.titleBox{text-align: center;}
.titleBox h1{font-size: 32px;}
.titleBox p{font-size: 18px;color: #999;}
</style>
