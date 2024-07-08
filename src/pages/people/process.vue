<script setup lang="ts">
import { reactive } from 'vue'

import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})

</script>

<template>
  <Layout class="people people_process" title="人民建议征集全覆盖-流程机制"  :logo="logo">
    <div  class="jz">
      <img src="/assets/people/process.png" srcset="/assets/people/process@2x.png 2x" alt="">
    </div>
    
  </Layout>

</template>

<style lang="scss" scoped>
  @media (max-width:768px) {
      .jz {
        padding:0 20px;
        img {
          width: 100%;
        }
      }
  }
</style>