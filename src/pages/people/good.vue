<script setup lang="ts">
import { reactive,ref } from 'vue'

import Layout from '@components/Layout.vue';
import { getJdz } from '@api/index.ts';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})
const dataArr = ref()
const loading = ref(true)
const centerDialogVisible = ref()



const activeIndex = ref(0)

const  loadData = async() => {
  loading.value = true;
  // const {data} = await getCommon({type:1})
  const {data} = await getJdz({})
  dataArr.value =  data;
  loading.value = false;
}

const onClick = (index:number) => {
  activeIndex.value = index;
  centerDialogVisible.value = true;
}
loadData()

</script>

<template>
  {{ console.log(dataArr) }}
  <Layout class="people" title="金点子结金果子"  :logo="logo">
      <div class="mapTree">
        <div class="ewm">
            <div class="pic"><img src="/assets/people/ewm.png" alt=""></div>
            <p>请打开随申办APP扫描上方二维码向虹桥街道提出意见建议</p>
        </div>
          <div class="pos loading" v-loading="loading">
            <img src="/assets/people/tree.png" class="bg" srcset="/assets/people/tree@2x.png 2x" alt=""/> 
            <div class="map">
              <span v-for="(item,index) in dataArr">
                <!-- <el-image :src="item.resource" :zoom-rate="1.2"  :max-scale="7" :preview-teleported="true"
                :preview-src-list="[item.resource]" :initial-index="1" fit="cover" /> -->
                <el-image   @click="onClick(index)" :src="item.resource" fit="cover" />
               <!-- <img :src="item.resource" alt="" @click="onClick(index)" />  -->
              </span>
            </div>
          </div>
      </div>
      <el-dialog v-model="centerDialogVisible"  title=""  align-center
        append-to-body>
        <!-- <div class="main" ></div> -->
        <div class="main" v-html="dataArr[activeIndex].zcjd_content"></div>
        <template #footer>
          <div class="dialog-footer">
            <el-button class="close" @click="centerDialogVisible = false">关闭</el-button>
 
          </div>
        </template>
      </el-dialog>
  </Layout>

</template>

<style lang="scss" scoped>
  .mapTree {
     position: absolute;
     bottom:0;
     width: 100%;
     padding:0 80px;
     box-sizing: border-box;
     display: flex;

    .ewm {
      width: 210px;

      background: rgba(137,93,25,0.5);
      border: 4px solid #FBDB9E;
      position:absolute;
      left:70px;
      top:0;
      padding:15px 10px;
      box-sizing: border-box;
      .pic {
        margin-bottom: 5px;
        img {
          width: 100%;
        }
      }
      p {
        margin:0;
        text-align: center;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 22px;
      }
    }
    .pos {
      width: 1223px;
      margin:0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .map {
        span {
          border-radius: 50%;
          border: 4px solid #FBDB9E;
          overflow: hidden;
          background:#fff;
          position: absolute;
          cursor: pointer;
          :deep(.el-image) {
            width:100%;
          }

          &.w200 {
            width: 200px;
            height: 200px;
          }
          &.w150 {
            width: 150px;
            height: 150px;
          }
          &.w280 {
            width: 280px;
            height: 280px;
          }
          &:nth-child(1) {
            width: 200px;
            height: 200px;
            left:0;
            top:175px;
          }
          &:nth-child(2) {
            left:100px;
            top:448px;
            width: 150px;
            height: 150px;
          }
          &:nth-child(3) {
            width: 200px;
            height: 200px;
            left:245px;
            top:248px;
          }
          &:nth-child(4) {
            width: 200px;
            height: 200px;
            left:345px;
            top:33px;
          }
          &:nth-child(5) {
            width: 200px;
            height: 200px;
            left:470px;
            top:329px;
          }
          &:nth-child(6) {
            width: 150px;
            height: 150px;
            left:570px;
            top:12px;
          }
          &:nth-child(7)  {
            left:645px;
            top:179px;
            width: 150px;
            height: 150px;
          }
          &:nth-child(8) {
            left:803px;
            top:73px;
            width: 280px;
            height: 280px;
          }
          &:nth-child(9) {
            width: 200px;
            height: 200px;
            left:1056px;
            top:349px;
          }
        }
      }
    }
  }

  .main {
    text-align: left;
    
    :deep(img) {
      display: block;
      margin:0 auto 20px;
    }
   
  }

  .close {
      width: 180px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 30px;
      color: #FFFFFF;
      margin:0 auto;
      cursor: pointer;
      border:0;
      
  }
  @media (max-width:768px) {
    .mapTree {
      position: relative;
      padding:0 20px;
      display: block;
      .ewm {
        position: relative;
        margin:0 auto;
        left:0;
      }
      .pos {
        width:100%;
        padding:0 20px;
        box-sizing: border-box;
        display: block;
        .bg {
          display: none;
        }
        .map {
          margin-top:20px;
          span {
            display: block;
            width: 100% !important;
            height: 200px !important;
            position: relative;
            left:0 !important;
            top:0 !important;
            border-radius: 0;
            margin-bottom: 20px;
          }
        }
      }
    }
    .main {
      :deep(img) {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
</style>