<script setup lang="ts">
import { reactive } from 'vue'
import EnterList from '@components/EnterList.vue'
import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "life/logo.png",
    url2x: "life/logo@2x.png"
})
const list = reactive([
    {
        title: "为老服务",
        content: "Serving the elderly",
        url: "life/list1.png",
        url2x: "life/list1@2x.png",
        link:"/life_server"
    },
    {
        title: "文化活动",
        content: "Cultural Activity",
        url: "life/list2.png",
        url2x: "life/list2@2x.png",
        link:"/life_active"
    },
    {
        title: "社区教育",
        content: "community education",
        url: "life/list3.png",
        url2x: "life/list3@2x.png",
        link:"/life_educate"
    },
    {
        title: "就业创业",
        content: "Employmentandentrepreneurship",
        url: "life/list4.png",
        url2x: "life/list4@2x.png",
        link:"/life_start"
    }
])

</script>

<template>
  <Layout class="life"  :logo="logo">
      <EnterList :data="list" class="life" />
  </Layout>

</template>
