
<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '@components/Layout.vue';
import SwiperList from '@components/SwiperList.vue';
const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})
</script>

<template>
  <Layout class="life" title="为老服务"  :logo="logo">
      <SwiperList />
  </Layout>

</template>
