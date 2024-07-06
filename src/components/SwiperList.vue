<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import Policy from './Policy.vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { ref } from 'vue'

const modules = [Autoplay, EffectCoverflow]

const type = ref(false)

const onShow = () => {
  type.value = true;
}
const onHide = (val:boolean) => {
  type.value = val;
}

defineProps<{ 
    class?:string
 }>()

</script>


<template>
  <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :loop="true"
    :coverflowEffect="{
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 2,

      slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper" :class="class">
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div class="btn" @click="onShow">
        <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
        <span>政策解读</span>
        <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
      </div>
    </swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      <div class="btn">
        <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
        <span>政策解读</span>
        <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
      </div>
    </swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      <div class="btn">
        <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
        <span>政策解读</span>
        <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
      </div>
    </swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      <div class="btn">
        <img src="/assets/life/book.png" srcset="/assets/life/book@2x.png 2x" alt="">
        <span>政策解读</span>
        <img src="/assets/life/arrow_right.png" srcset="/assets/life/arrow_right@2x.png 2x" alt="">
      </div>

    </swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>
  </swiper>
  <Policy v-if="type" @back="onHide" />
</template>

<style lang="scss" scoped>
.mySwiper {
  width: 1200px;

  .swiper {
    width: 100%;
    padding:50px 0;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 722px;
    border: 2px solid #fff;
    position: relative;

    .btn {
      position: absolute;
      right: 0;
      width: 240px;
      height: 80px;
      background: #D6993A;
      bottom: 50px;
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
</style>