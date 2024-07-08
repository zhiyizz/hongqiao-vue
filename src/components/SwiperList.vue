<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import Policy from './Policy.vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { isMobileDevice } from '@utils/help.ts';
import { ref } from 'vue'

const modules = [Autoplay, EffectCoverflow]

const type = ref(false)

const onShow = () => {
  type.value = true;
}
const onHide = (val: boolean) => {
  type.value = val;
}

defineProps<{
  class?: string
}>()

</script>


<template>
  <swiper v-if="!isMobileDevice()" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="2"
    :loop="true" :coverflowEffect="{
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper" :class="class">

    <swiper-slide>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </swiper-slide>
    <swiper-slide>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </swiper-slide>
    <swiper-slide>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </swiper-slide>
    <swiper-slide>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </swiper-slide>


  </swiper>

  <ul class="list" v-if="isMobileDevice()">
    <li>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </li>
    <li>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </li>
    <li>
      <div class="pic">
        <el-image src="https://swiperjs.com/demos/images/nature-1.jpg" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
          preview-teleported="true" :preview-src-list="['https://swiperjs.com/demos/images/nature-1.jpg']"
          :initial-index="4" fit="cover" />
        <div class="btn" @click="onShow">
          <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
          <span>政策解读</span>
          <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
        </div>
      </div>
      <h3>标题</h3>
    </li>
  </ul>
  <Policy v-if="type" @back="onHide" />
</template>

<style lang="scss" scoped>
:deep(.swiper-slide-shadow-coverflow) {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
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

}
</style>