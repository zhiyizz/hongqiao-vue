
<script setup lang="ts">
import { reactive, ref } from 'vue'
import Layout from '@components/Layout.vue';
import TabView from '@components/TabView.vue';
import { getWhhd } from '@api/index.ts';
const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})

const dataArr = ref([])
const loading = ref(true)
const tab = ['华夏云','记忆虹桥','融情四季','我们的节日']

const tab_now = ref(tab[0])

const  loadUser = async() => {
  loading.value = true;
  const {data} = await getWhhd({cate_name:tab_now.value})
  dataArr.value =  data;
  loading.value = false;
}
loadUser()

const setTab = (val:string) => {
  tab_now.value = val;
  loadUser();
}
</script>

<template>

  <Layout class="life" title="文化活动"  :logo="logo">
   <div  v-loading="loading">
    <TabView :tab="tab"  :data="dataArr" @back="setTab"  />
   </div>
  </Layout>

</template>
