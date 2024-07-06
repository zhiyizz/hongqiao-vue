<script lang="ts" setup>
import SwiperList from './SwiperList.vue';
import Copy from './Copy.vue';
</script>


<template>
  <div class="tab-body">

    <Copy title="华夏云" content="为更好地“展示中国形象、讲好中国故事、传
          播中国声音”，虹桥街道持续开展“华夏云”
          项目，为学习和生活在虹桥的中外居民开设中
          国传统文化体验活动。无论是来自国际学校、
          传统街区还是国际社区的中外居民，都可以通
          过“华夏云”项目学习如昆曲、书法、古筝等
          中国传统文化，感受华夏文明的魅力。" />
    <div class="pic">
      <SwiperList class="small" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-body {
  display: flex;
  flex-direction: row;
  align-items: center;

}
</style>
