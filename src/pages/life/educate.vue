
<script setup lang="ts">
import { reactive,ref } from 'vue'
import Layout from '@components/Layout.vue';

import Present from '@components/Present.vue';

import { getWhhd } from '@api/index.ts';
const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})

const dataArr = ref()


const  loadData = async() => {

  const {data} = await getWhhd({cate_name:"社区教育"})
  dataArr.value =  data;

}
loadData()
</script>

<template>

  <Layout class="life" title="社区教育"  :logo="logo">
      <Present v-if="dataArr" :data="dataArr" />
  </Layout>

</template>
