<script setup lang="ts">
import { reactive,ref } from 'vue'
import SwiperList from '@components/SwiperList.vue'
import Layout from '@components/Layout.vue';
import { getCommon } from '@api/index.ts';
const logo = reactive({
    url: "rule/logo.png",
    url2x: "rule/logo@2x.png"
})

const dataArr = ref()
const loading = ref(true)


const  loadData = async() => {
  loading.value = true;
  const {data} = await getCommon({type:7})
  dataArr.value =  data;
  loading.value = false;
}
loadData()


</script>

<template>

  <Layout class="rule" title="社区普法阵地"  :logo="logo">
    <div v-loading="loading" class="loading">
      <SwiperList :data="dataArr" />
    </div>
  </Layout>

</template>
