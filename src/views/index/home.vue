<template>
  <div class="home">
    <div class="title">
      <img src="../../assets/img/6010beef78699.png"
           alt="">
    </div>
    <ul class="ul-hot">
      <li>
        <div>热门城市</div>
        <ul>
          <li>广州</li>
          <li>深圳</li>
          <li>佛山</li>
          <li>杭州</li>
          <li>北京</li>
          <li>上海</li>
          <div class="demo-input-size input_search">
            <el-input v-model="searchInput"
                      class="w-150"
                      placeholder="城市搜索"
                      size="small" />
            <i class="el-icon-search searchBtn"
               @click="searchJieGuo"></i>
          </div>
        </ul>

      </li>
      <li v-show="isprovinceList"
          v-for="i in provinceList"
          :key="i.index">
        <div>{{i.provincialName}}</div>
        <ul>
          <li v-for="j in i.chlidren"
              :key="j.index"><el-link :underline="false" :href="'/#/lanmu/'+j.cityName">{{j.cityName}}</el-link></li>
        </ul>
      </li>
      <li v-show="!isprovinceList"
          v-for="i in provinceList1"
          :key="i.index">
        <div>{{i.provincialName}}</div>
        <ul>
          <li v-for="j in i.chlidren"
              :key="j.index"><el-link :underline="false" :href="'/#/lanmu/'+j.cityName">{{j.cityName}}</el-link></li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { fetchProvinceData, getCityData } from '../../api/index'
import { ElMessage } from "element-plus";
export default {
  name: 'home',
  data () {
    return {
    }
  },
  setup () {
    let isprovinceList = ref(true)
    let provinceList = ref([])
    let cityList = ref([])
    let searchInput = ref('')
    let provinceList1 = ref([])

    const city = {
      "cityCode": "",
      "cityName": "",
      "provincialCode": "",
      "provincialName": ""
    }
    function getProv () {
      // 获取省
      fetchProvinceData().then(async res => {
        provinceList.value = res
      })
    }
    function getCityAll () {
      getCityData(city).then(res => {
        cityList.value = res
        getCity()
      })
    }
    function getCity () {
      provinceList.value.forEach(e => {
        e.chlidren = []
        cityList.value.forEach(e1 => {
          if (e.provincialName === e1.provincialName) {
            e.chlidren.push(e1)
          }
        })
      })
    }

    function searchData () {
      const dataList = reactive([])
      provinceList.value.forEach(item => {
        item.chlidren.forEach(item1 => {
          if (searchInput.value === item1.cityName || searchInput.value === item1.provincialName) {
            dataList.push(item)
          } else {
            dataList.value = ''
          }
        })
      })
      return dataList
    }

    function searchJieGuo () {
      if (searchData()[0]) {
        // console.log(searchData()[0])
        provinceList1.value.push(searchData()[0])
      } else {
        ElMessage.error('无搜索结果！')
      }
      isprovinceList.value = false
    }


    getProv()
    getCityAll()
    return {
      provinceList,
      cityList,
      searchInput,
      provinceList1,
      isprovinceList,
      searchJieGuo
    }
  }
}
</script>

<style scoped>
.home {
  font-size: 14px;
  width: 1200px;
  margin: 0 auto;
}
.home .title {
  width: 100%;
  height: 60px;
}
.home .title img {
  width: 1200px;
  height: 60px;
  object-fit: cover;
  object-position: center;
}
.home .title span:nth-of-type(1) {
  font-weight: bold;
  border-right: 1px solid #fff;
}
.home > ul > li {
  display: flex;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eeeeee;
}
.home > ul > li:hover:not(:nth-of-type(1)) {
  background-color: #eee;
}
.home > ul > li:hover:not(:nth-of-type(1)) div {
  background-color: #ff0000;
  color: #fff;
}
.home > ul > li:nth-of-type(1) {
  height: 45px;
  line-height: 45px;
  background-color: #f7f7f7;
  border: 0;
}
.home > ul > li:nth-of-type(1) > div:nth-of-type(1) {
  line-height: 45px;
  background-color: #f7f7f7;
}
.home > ul > li > div {
  width: 105px;
  height: 100%;
  line-height: 60px;
  text-align: center;
  background-color: #fafafa;
}
.home > ul > li > ul {
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 20px;
}
.home > ul > li > ul > li {
  height: 100%;
  padding: 0 10px;
  color: #666666;
}
.home > ul > li > ul > li a {
  color: #888;
}
.home > ul > li > ul > li:hover a{color: #ff0000;}
.home .ul-hot li:nth-of-type(1) {
  position: relative;
}
.home .demo-input-size {
  position: absolute;
  right: 5px;
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
}
.home .demo-input-size i.searchBtn {
  position: absolute;
  right: 5px;
  font-size: 20px;
  margin: 0 5px;
  color: #888;
}
</style>
