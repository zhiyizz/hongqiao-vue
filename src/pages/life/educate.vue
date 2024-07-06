
<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '@components/Layout.vue';

import Present from '@components/Present.vue';

const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})
</script>

<template>
  <Layout class="life" title="社区教育"  :logo="logo">
      <Present />
  </Layout>

</template>
