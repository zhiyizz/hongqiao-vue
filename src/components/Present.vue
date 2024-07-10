<script lang="ts" setup>
import SwiperList from './SwiperList.vue';
import Copy from './Copy.vue';
import type { WhhdType } from '@utils/type/global.ts'

const props = defineProps<{
    data:typeof WhhdType
}>()


</script>


<template>
  {{ console.log(props.data) }}
  <div class="tab-body">
    <Copy :title="props.data?.page_content?.cate_name??''" :content="props.data.page_content?.detail??''" />
    <div class="pic">
      <SwiperList :data="props.data.detail" class="small" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-body {
  display: flex;
  flex-direction: row;
  align-items: center;

}

@media (max-width:768px) {
  .tab-body {
    padding:0 20px;
    display:block;
    margin-top:20px;
    :deep(.list){
      padding:0;
    }
  }
}
</style>
