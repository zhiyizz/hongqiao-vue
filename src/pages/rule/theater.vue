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
  const {data} = await getCommon({type:8})
  dataArr.value =  data;
  loading.value = false;
}
loadData()
const visible  = ref(false);
const nowVideo = ref(0)
const onClick = (e:number) => {
  visible .value = true;
  nowVideo.value = e;
}


</script>

<template>
  <Layout class="rule" title="普法微剧场" :logo="logo">
    <div class="video-list">
      <ul>
        <li v-for="(item,index) in dataArr" @click="(onClick(index))">
          <img :src="item.thumb"  alt="" />
          <div class="play"></div>
        </li>

      </ul>
    </div>
    <div class="playInter" v-if="visible">
      <span class="close" @click="visible = false"></span>
      <div class="main">
        <video playsInline controls webkit-playsinline="true" loop x5-video-player-type="h5" autoPlay >
          <source :src="dataArr[nowVideo].resource" />
        </video>
      </div>
     
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
            position: relative;
            overflow: hidden;
            img {
              width: 100%;
            }
            .play {
              position: absolute;
              width: 100%;
              height: 100%;
              top:0;
              background: url('/assets/play.png') no-repeat center center;
              cursor: pointer;
            }
            &:nth-child(4n) {
              margin-right:0;
            }
          }
        }
    }
    .playInter {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 10;
      top:0;
      background: rgba(0,0,0,.8);
      display: flex;
      justify-content: center;
      align-items: center;
      video {
        height: auto;
        max-width: 1200px;
      }
      span {
        width: 50px;
        height: 50px;
        display: block;
        position: absolute;
          right: 50px;
          top:50px;
        &::after,&::before {
          content: "";
          width: 50px;
          height: 1px;
          display: block;
       
          background: #fff;
          cursor: pointer;
        }
        &::after {
          transform: rotate(45deg);
        }
        &::before {
          transform: rotate(-45deg);
        } 
      }
    }
    @media (max-width:768px) {
    .video-list {
      display:block;
      width: 100%;
      ul {
        display: block;
        padding:0 20px;
        li {
          width: 100%;
          margin-bottom: 20px;
          box-sizing: border-box;
        }
      }
    }
    .playInter {
      span {
        width: 30px;
        height: 30px;
      }
      video {
        width: 100%;
      }
    }
    }
</style>