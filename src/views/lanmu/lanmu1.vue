<template>
  <div>{{$route.params.city}}</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  name:'',
  setup(){
    const router = useRouter()
    onMounted(()=>{
      console.log(router)
    })
    return{
    }
  }
}
</script>