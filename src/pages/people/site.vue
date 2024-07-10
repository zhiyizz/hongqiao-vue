<script setup lang="ts">
import { reactive,ref } from 'vue'

import Layout from '@components/Layout.vue';
import SwiperList from '@components/SwiperList.vue';
import { getCommon } from '@api/index.ts';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})

const dataArr = ref()
const loading = ref(true)


const  loadData = async() => {
  loading.value = true;
  const {data} = await getCommon({type:2})
  dataArr.value =  data;
  loading.value = false;
}
loadData()

</script>

<template>
  <Layout class="people people_site" title="人民建议征集全覆盖-站点分布"  :logo="logo">
    <div v-loading="loading" class="loading">
      <SwiperList :data="dataArr" />
    </div>
  </Layout>

</template>
