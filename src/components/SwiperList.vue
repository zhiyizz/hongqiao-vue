<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import Policy from './Policy.vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { isMobileDevice } from '@utils/help.ts';
import type { SwiperType } from '@utils/type/global.ts'
import { ref } from 'vue'

const centerDialogVisible = ref()
const modules = [Autoplay, EffectCoverflow]

const type = ref(false)

const activeIndex = ref(0)
const onShow = () => {
  type.value = true;
}
const onHide = (val: boolean) => {
  type.value = val;
}



defineProps<{
  class?: string
  data:typeof SwiperType
}>()

const onSlideChange = (e: { activeIndex: number }) => {
    console.log(e)
    activeIndex.value = e.activeIndex
  }
</script>


<template>

  <swiper v-if="!isMobileDevice()" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
    :slidesPerView="'auto'" :coverflowEffect="{
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper" :class="class" @slideChange="onSlideChange">
    <swiper-slide v-for="(item, index) in data">
      <div class="pic">
        <el-image :src="item.resource" :zoom-rate="1.2" :max-scale="7" :preview-teleported="true"
          :preview-src-list="[item.resource]" :initial-index="1" fit="cover" />
        <div class="btn" @click="centerDialogVisible = true" v-if="item.zcjd_flag === 1 && activeIndex === index">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>{{ item.title }}</h3>
      
      <el-dialog v-model="centerDialogVisible" v-if="activeIndex === index" title="政策解读"  align-center
        append-to-body>
        <div class="main" v-html="item.zcjd_content"></div>
        <template #footer>
          <div class="dialog-footer">
            <el-button class="close" @click="centerDialogVisible = false">关闭</el-button>
 
          </div>
        </template>
      </el-dialog>

    </swiper-slide>


  </swiper>

  <ul class="list" v-if="isMobileDevice()">
    <li v-for="(item, index) in data">
      <div class="pic">
        <el-image :src="item.resource" :zoom-rate="1.2" :max-scale="7" :preview-teleported="true"
          :preview-src-list="[item.resource]" :initial-index="1" fit="cover" />
        <div class="btn" @click="centerDialogVisible = true" v-if="item.zcjd_flag === 1 && activeIndex === index">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>{{ item.title }}</h3>
      
      <el-dialog v-model="centerDialogVisible" v-if="activeIndex === index" title="政策解读"  align-center
        append-to-body>
        <div class="main" v-html="item.zcjd_content"></div>
        <template #footer>
          <div class="dialog-footer">
            <el-button class="close" @click="centerDialogVisible = false">关闭</el-button>
 
          </div>
        </template>
      </el-dialog>
    </li>

  </ul>
  <Policy v-if="type" @back="onHide" />
</template>

<style lang="scss" scoped>
:deep(.swiper-slide-shadow-coverflow) {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

:deep(.el-dialog) {
    padding:40px  60px !important;
    background: #fff !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
    border: 4px solid #FBDB9E !important;
}
.main {
    text-align: left;
    h3 {
      text-align: center;
      font-family: SourceHanSerifCN-Bold;
      font-weight: bold;
      font-size: 40px;
      color: #333333;
      margin: 0;

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


.mySwiper {
  width: 1200px;

  .swiper {
    width: 100%;
    padding: 50px 0;
  }

  .swiper-slide,
  li {
    background-position: center;
    background-size: cover;
    width: 722px;

    position: relative;

    &.swiper-slide-active {
      h3 {
        display: block;
      }
    }


    h3 {
      text-align: center;
      margin: 20px 0 0;
      line-height: 24px;
      display: none;
    }

    .pic {
      position: relative;

      .btn {
        position: absolute;
        right: -2px;
        width: 240px;
        height: 80px;
        background: #D6993A;
        bottom: 4px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: AlibabaPuHuiTi;
        font-size: 30px;
        font-weight: 400;

        span {
          display: inline-block;
          margin: 0 10px;
          cursor: pointer;
        }

        img {
          width: auto;
        }
       
      }

      .el-image {
        width: 100%;
        border: 2px solid #fff;
      }
    }


  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  &.small {
    width: 716px;

    .swiper-slide {
      width: 590px;

    }
  }

}

.list {
  list-style: none;
  padding: 0;
  width: 100%;
  padding:0 20px;
  box-sizing: border-box;
  li {
    margin: 0 0 20px;
    position: relative;
    overflow: hidden;
    
    h3 {
        text-align: center;
        font-size: 18px;
      }
    .pic {
      position: relative;

      img {
        width: 100%;
        float: left;
      }
    
      .btn {
        position: absolute;
        right: 0;
        width: 160px;
        height: 60px;
        background: #D6993A;
        bottom: 0;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: AlibabaPuHuiTi;
        font-size: 20px;
        font-weight: 400;

        span {
          display: inline-block;
          margin: 0 10px;
          cursor: pointer;
        }

        img {
          display: block;
          width: 20px;
        }
      }
    }



  }
}

@media (max-width:768px) {
  .mySwiper {
    width: 100%;
  
     box-sizing: 0;
    .swiper-slide {
      width: auto;
    }
  }
  .close {
      width: 100px;
      height:40px;
      line-height: 40px;
      text-align: center;
    
      font-size: 18px;
      color: #FFFFFF;
      margin:0 auto;
      cursor: pointer;
      border:0;

  }
}
    


</style>