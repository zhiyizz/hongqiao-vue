<script setup lang="ts">
import { reactive } from 'vue'
import EnterList from '@components/EnterList.vue'
import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "rule/logo.png",
    url2x: "rule/logo@2x.png"
})
const list = reactive([
    {
        title: "普法微剧场",
        content: "Popularizing law micro theater",
        url: "rule/list1.png",
        url2x: "rule/list1@2x.png",
        link:"/rule/theater"
    }, {
        title: "三所联动·护平安",
        content: "Three Linkages · Protecting Safety",
        url: "rule/list2.png",
        url2x: "rule/list2@2x.png",
        link:"/rule/three"
    },{
        title: "十分钟法律服务圈",
        content: "Ten-minute legal service circle",
        url: "rule/list3.png",
        url2x: "rule/list3@2x.png",
        link:"/rule/ten"
    },{
        title: "社区普法阵地",
        content: "Community legal education",
        url: "rule/list4.png",
        url2x: "rule/list4@2x.png",
        link:"/rule/community"
    },{
        title: "法律服务一键查",
        content: "One-click search for legal services",
        url: "rule/list5.png",
        url2x: "rule/list5@2x.png",
        link:"/rule/search"
    },
    {
        title: "基层法治观察行",
        content: "Grassroots Rule of Law Observation",
        url: "rule/list6.png",
        url2x: "rule/list6@2x.png",
        link:"/rule/tour"
    },
    
])

</script>

<template>
  <Layout class="rule"  :logo="logo">
      <EnterList :data="list" class="rule" />
  </Layout>

</template>
