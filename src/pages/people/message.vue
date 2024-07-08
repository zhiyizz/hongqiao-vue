<script setup lang="ts">
import { reactive } from 'vue'

import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})

</script>

<template>
  <Layout class="people people_message" title="人民建议征集全覆盖-建议征集"  :logo="logo">
     <div class="message">
        <div class="ewm">
        </div>
        <p>请打开随申办APP扫描上方二维码向虹桥
          街道提出意见建议</p>
     </div>
  </Layout>

</template>


<style lang="scss" scoped>
    .message {
      width: 500px;
      .ewm {
        width: 500px;
        height: 500px;
        background: #FFFFFF;
        box-shadow: 0px 0px 30px 0px rgba(153,99,16,0.2);
        border: 4px solid #FBDB9E;
      }
      p {
        text-align: center;
        font-size: 26px;
        color: #333333;
        line-height: 36px;
        margin-top:28px;
      }
    }
    @media (max-width:768px) {
      .message {
        width: 100%;
        padding:0 20px;
        box-sizing: border-box;
        .ewm {
          width: 200px;
          height: 200px;
          margin:0 auto;
        }
        p {
          width: 200px;
          margin:20px auto 0;
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
</style>