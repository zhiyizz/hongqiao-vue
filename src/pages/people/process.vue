<script setup lang="ts">
import { reactive,ref } from 'vue'

import Layout from '@components/Layout.vue';
import { getCommon } from '@api/index.ts';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})
const dataArr = ref()
const loading = ref(true)


const  loadData = async() => {
  loading.value = true;
  const {data} = await getCommon({type:3})
  dataArr.value =  data;
  loading.value = false;
}
loadData()
</script>

<template>
  {{ console.log(dataArr) }}
  <Layout class="people people_process" title="人民建议征集全覆盖-流程机制"  :logo="logo">
    <div  class="jz">
      <img v-for="(item) in dataArr" :src="item.resource"  alt="">
    </div>
    
  </Layout>

</template>

<style lang="scss" scoped>
.jz {
  max-width: 1000px;
  img {
    width: 100%;
  }
}
  @media (max-width:768px) {
      .jz {
        padding:0 20px;
        img {
          width: 100%;
        }
      }
  }
</style>