<script setup lang="ts">
import { reactive } from 'vue'

import Layout from '@components/Layout.vue';
import SwiperList from '@components/SwiperList.vue';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})

</script>

<template>
  <Layout class="people people_site" title="人民建议征集全覆盖-站点分布"  :logo="logo">
    <SwiperList />
  </Layout>

</template>
