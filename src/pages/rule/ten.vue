<script setup lang="ts">
import { reactive } from 'vue'
import SwiperList from '@components/SwiperList.vue'
import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "rule/logo.png",
    url2x: "rule/logo@2x.png"
})

</script>

<template>
  <Layout class="rule" title="十分钟法律服务圈"  :logo="logo">
      <SwiperList />
  </Layout>

</template>
