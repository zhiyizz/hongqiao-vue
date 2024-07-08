<script setup lang="ts">
import { reactive } from 'vue'

import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "rule/logo.png",
    url2x: "rule/logo@2x.png"
})


</script>

<template>
  <Layout class="rule" title="法律服务一键查"  :logo="logo">
      <div class="search">
         <ul>

            <li v-for="item in [1,2,3,4,5]">
              <div class="pic"></div>
              <p>二维码名称</p>
            </li>
            
         </ul>
      </div>
  </Layout>

</template>

<style lang="scss" scoped>
  .search {
    padding:0 60px;

    ul {
      list-style:none;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 300px;
        background: #FFFFFF;
        border: 4px solid #FBDB9E;
        box-sizing: border-box;
        background:#fff;
        margin:10px;
        .pic {
          background: #fff;
          height: 300px;
        }
        p {
          font-size: 30px;
          color: #333333;
          line-height: 31px;
          text-align: center;
        }
      }
    }
  }
</style>