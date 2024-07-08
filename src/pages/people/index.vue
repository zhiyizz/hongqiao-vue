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
        title: "金果子<br />金点子结",
        content: "Gold dots yield gold fruits",
        url: "people/list1.png",
        url2x: "people/list1@2x.png",
        link:"/people_good"
    },
    {
        title: "征集全覆盖<br />人民建议",
        content: "Cultural Activity",
        url: "people/list2.png",
        url2x: "people/list2@2x.png",
        link:"/people_suggestion"
    }
])

</script>

<template>
  <Layout class="people"  :logo="logo">
      <EnterList :data="list" class="people" />
  </Layout>

</template>
