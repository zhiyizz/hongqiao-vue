<script setup lang="ts">
import { reactive } from 'vue'
import EnterList from '@components/EnterList.vue'
import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})
const list = reactive([
    {
        title: "流程机制",
        content: "Process mechanism",
        url: "people/pro1.png",
        url2x: "people/pro1@2x.png",
        link:"/people_process"
    },
    {
        title: "站点分布",
        content: "Site distribution",
        url: "people/pro2.png",
        url2x: "people/pro2@2x.png",
        link:"/people_site"
    },
    {
        title: "建议征集",
        content: "Suggested solicitation",
        url: "people/pro3.png",
        url2x: "people/pro3@2x.png",
        link:"/people_message"
    }
])

</script>

<template>
  <Layout class="people" title="人民建议征集全覆盖"  :logo="logo">
      <EnterList :data="list" class="suggestion" />
  </Layout>

</template>
