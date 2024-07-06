
<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '@components/Layout.vue';
import TabView from '@components/TabView.vue';
const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})
</script>

<template>
  <Layout class="life" title="文化活动"  :logo="logo">
      <TabView />
  </Layout>

</template>
