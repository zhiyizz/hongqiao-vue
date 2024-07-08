<script setup lang="ts">
import { reactive } from 'vue'

import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "people/logo.png",
    url2x: "people/logo@2x.png"
})


</script>

<template>
  <Layout class="people" title="金点子结金果子"  :logo="logo">
      <div class="mapTree">
        <div class="ewm">
            <div class="pic"></div>
            <p>请打开随申办APP扫描上方二维码向虹桥街道提出意见建议</p>
        </div>
          <div class="pos">
            <img src="/assets/people/tree.png" class="bg" srcset="/assets/people/tree@2x.png 2x" alt=""/> 
            <div class="map">
              <span class="m1 w200"></span>
              <span class="m2 w150"></span>
              <span class="m3 w200"></span>
              <span class="m4 w200"></span>
              <span class="m5 w200"></span>
              <span class="m6 w150"></span>
              <span class="m7 w150"></span>
              <span class="m8 w280"></span>
              <span class="m9 w200"></span>
            </div>
          </div>
      </div>
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
      height: 280px;
      background: rgba(137,93,25,0.5);
      border: 4px solid #FBDB9E;
      position:absolute;
      left:70px;
      top:0;
      padding:15px 10px;
      box-sizing: border-box;
      .pic {
        height: 182px;
        background:#fff;
        margin-bottom: 5px;
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
          &.m1 {
            left:0;
            top:175px;
          }
          &.m2 {
            left:100px;
            top:448px;
          }
          &.m3 {
            left:245px;
            top:248px;
          }
          &.m4 {
            left:345px;
            top:33px;
          }
          &.m5 {
            left:470px;
            top:329px;
          }
          &.m6 {
            left:570px;
            top:12px;
          }
          &.m7 {
            left:645px;
            top:179px;
          }
          &.m8 {
            left:803px;
            top:73px;
          }
          &.m9 {
            left:1056px;
            top:349px;
          }
        }
      }
    }
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
  }
</style>