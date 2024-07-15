<script setup lang="ts">
import { RouterLink } from 'vue-router';
import 'aos/dist/aos.css';
import { isMobileDevice } from '../utils/help';
type PropsType = {
  data: {
    url: string
    url2x: string
    title: string
    content: string
    link: string
  }[]
  class: string
}
defineProps<PropsType>()


</script>

<template>

  <ul class="enter-list" :class="class">
    <li v-for="(item, index) in data" :data-aos="isMobileDevice() ? '':'fade-left' " :data-aos-duration="index * 500"
      :data-aos-delay="index * 300">
      <RouterLink :to="{ path: item.link }">
        <img :src="`/assets/` + item.url" alt="" class="bg" :srcset="`/assets/${item.url2x} 2x`">
        <div class="text">
          <p>{{ item.content }}</p>
          <h3 v-html="item.title"></h3>
        </div>
      </RouterLink>

    </li>
  </ul>
</template>



<style lang="scss" scoped>
.enter-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0 40px;

  li {
    position: relative;
    width: 360px;
    &:nth-child(odd) {
      animation: 3s linear 4s infinite alternate up;
    }

    &:nth-child(even) {
      animation: 3s linear 3s infinite alternate up;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      position: relative;
      writing-mode: vertical-lr;
      width: 100%;
    }

    .bg {

      width: 100%;
    }

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      top: 120px;
      left: 34px;

      h3,
      p {
        position: relative;
        margin: 0;

      }

      p::before {
        content: "";
        width: 12px;
        height: 104px;
        background: #fff;
        display: inline-block;
        margin-bottom: 10px;
      }

      p {
        font-family: AlibabaPuHuiTi-Light;
        color: #fff;
        font-size: 22px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0;
      }

      h3 {
        font-family: SourceHanSerifCN-Heavy;
        font-size: 72px;
        color: #fff;
        letter-spacing: 4px;
        margin-right: 10px;
      }

    }


  }

  &.life {
    grid-template-columns: repeat(4, 1fr);
  }

  &.suggestion {
    grid-template-columns: repeat(3, 1fr);
  }

  &.rule {
    grid-template-columns: repeat(6, 1fr);

    li {
      width: 240px;

      .text {
        top: 80px;
        left: 20px;

        h3 {
          font-size: 44px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }

  &.people,
  &.rule_server {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 100px;

    li {
      width: 460px;
      height: 600px;
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
    display: block;
    padding:0 20px;
    box-sizing: border-box; 
    li {
      width: 100%;
    }
    // li {
    //   height: 170px;
    //   overflow: hidden;
    //   .bg {
    //     transform: translateY(-20%);
    //   }
    // }
    &.rule,&.people {
      li {
        width: 100%;
        margin:20px 0;
        .text {
          top:15%;
        }
      }
    }
    &.people{
      .text {
        h3 {
          font-size: 48px;
        }
      }
    }
  }
}
</style>
