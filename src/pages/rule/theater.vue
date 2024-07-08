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
  <Layout class="rule" title="普法微剧场"  :logo="logo">
      <div class="video-list">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
  </Layout>

</template>
<style lang="scss" scoped>
    .video-list {
      display: flex;

      width: 1920px;
      margin:0 auto;
      ul {
          list-style: none;
          padding:0;
          display: grid;
          // flex-wrap: wrap;
           gap: 40px;
          grid-template-columns: repeat(4,1fr);
          li {
            width: 400px;
            height: 225px;
            background: #000000;
            border: 4px solid #FBDB9E;
           
            &:nth-child(4n) {
              margin-right:0;
            }
          }
        }
    }
</style>