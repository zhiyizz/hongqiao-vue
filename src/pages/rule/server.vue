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
        title: "指引",
        content: "guide",
        url: "rule/s1.png",
        url2x: "rule/s1@2x.png",
        link:"/people_good"
    }, {
        title: "公证",
        content: "notarization",
        url: "rule/s2.png",
        url2x: "rule/s2@2x.png",
        link:"/people_good"
    }
    
])

</script>

<template>
  <Layout class="rule"  :logo="logo">
      <EnterList :data="list" class="rule_server" />
  </Layout>

</template>
