
<script setup lang="ts">
import { reactive,ref,toRaw } from 'vue'
import Layout from '@components/Layout.vue';
import SwiperList from '@components/SwiperList.vue';
import { getWlfw } from '@api/index.ts'
const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})

const dataArr = ref()
const loading = ref(true)
const  loadData = async() => {
  loading.value = true;
  const {data} = await getWlfw({})
  dataArr.value =  data;
  loading.value = false;
}
loadData()

</script>

<template>
  <Layout class="life" title="为老服务"  :logo="logo">
    <div v-loading="loading" class="loading">
      <SwiperList :data="dataArr"  />
    </div>
      
  </Layout>

</template>

