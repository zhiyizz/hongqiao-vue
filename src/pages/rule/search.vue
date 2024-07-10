<script setup lang="ts">
import { reactive,ref } from 'vue'

import Layout from '@components/Layout.vue';
import { getCommon } from '@api/index.ts';
const logo = reactive({
    url: "rule/logo.png",
    url2x: "rule/logo@2x.png"
})

const dataArr = ref()
const loading = ref(true)


const  loadData = async() => {
  loading.value = true;
  const {data} = await getCommon({type:5})
  dataArr.value =  data;
  loading.value = false;
}
loadData()


</script>

<template>

  <Layout class="rule" title="法律服务一键查"  :logo="logo">
      <div class="search" >
         <ul  v-loading="loading" class="loading">
            <li v-for="item in dataArr">
              <div class="pic">
                <img :src="item.resource" alt="" />
              </div>
              <p>{{item.title}}</p>
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
      padding:0;
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
  @media (max-width:768px) {
    .search{
      padding:0 20px;
      ul {
        display:block;
        li {
          width:100%;
          margin:10px 0;

        }
      }
    }
  }
</style>