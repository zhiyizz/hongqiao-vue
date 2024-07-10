<script setup lang="ts">

import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';
import { RouterLink } from 'vue-router';
import { isMobileDevice } from '../utils/help';


</script>

<template>
  <div class="app-wrapper">
    <Header />
    <div class="content">
      <div class="home">
        <ul class="enter-list">
          <li :data-aos="isMobileDevice() ? '':'fade-left' "  data-aos-duration="500" :data-aos-delay="150" >
            <RouterLink to="/life">
              <img src="/assets/home/list1.png" class="bg" alt="" srcset="/assets/home/list1@2x.png 2x">
              <div class="content">
                <img src="/assets/home/list1_text.png" class="text" alt="" srcset="/assets/home/list1_text@2x.png 2x">
                <span>Wonderful Life</span>
              </div>

            </RouterLink>

          </li>
          <li :data-aos="isMobileDevice() ? '':'fade-left' "  data-aos-duration="2000" :data-aos-delay="300">
            <RouterLink to="/people">
              <img src="/assets/home/list2.png" alt="" class="bg" srcset="/assets/home/list2@2x.png 2x">
              <div class="content">
                <img src="/assets/home/list2_text.png" class="text" alt="" srcset="/assets/home/list2_text@2x.png 2x">
                <span>People's Suggestions</span>
              </div>

            </RouterLink>
          </li>
          <li :data-aos="isMobileDevice() ? '':'fade-left' "  data-aos-duration="3000" :data-aos-delay="450">
            <RouterLink to="/rule">
              <img src="/assets/home/list3.png" alt="" class="bg" srcset="/assets/home/list3@2x.png 2x">
              <div class="content">
                <img src="/assets/home/list3_text.png" class="text" alt="" srcset="/assets/home/list3_text@2x.png 2x">
                <span>The Rainbow Bridge <br />of the Rule of Law</span>
              </div>
            </RouterLink>
          </li>
        </ul>

      </div>
    </div>
    <Footer className="home" />
  </div>



</template>

<style lang="scss" scoped>
.enter-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0 40px;
  grid-template-columns: repeat(3, 1fr);

  li {

    &:nth-child(odd) {
      animation: 3s linear 4s infinite alternate up;
    }

    &:nth-child(even) {
      animation: 3s linear 3s infinite alternate up;
    }

    a {
      display: block;
      position: relative;

      text-decoration: none;

      .bg {
        width: 100%;
      }
    }

    span {
      font-family: AlibabaPuHuiTi-Light;
      font-size: 38px;
      color: #FFFFFF;
      line-height: 38px;
      text-align: center;
      display: block;
    }

    .text {
      margin-left: 40px;
      margin-top: 20px;

    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

    }

    img,
    span,
    p {
      position: relative;
    }

    &:first-child {
      span {
        font-size: 48px;
      }
    }
  }

}


@keyframes up {
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

@media (max-width:768px) {
  .enter-list {
    margin: 20px 0;
    display: block;
    width: 100%;
    padding:0 20px;
    box-sizing: border-box;
    li {
      // width: 100%;
      // height: 170px;
      // overflow: hidden;
       margin-bottom: 20px;
      &:nth-child(odd) {
        animation: none;
      }

      &:nth-child(even) {
        animation: none;
      }
      span {
        font-size: 24px;
        line-height: 24px;
        
      }
      &:first-child {
          span {
            font-size: 24px;
          line-height: 24px;
          }
        }
      // .content {
      //     height: 160px;
      //     overflow:hidden;
      //     align-items: start;
          
      //     .text {
      //         width: 100px;
      //         margin:10px 0 0 20px;
              
      //       }
      //       span {
      //         display: none;
      //       }
      //   }
    
    }

  }
}
</style>
