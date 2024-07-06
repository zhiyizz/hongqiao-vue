<template>

  <div class="app-wrapper">
      <Header :class="class" :title="title" :logo="logo" />
      <div class="content">
          <!-- <EnterList :data="list" class="life" /> -->
          <slot></slot>
      </div>
      <Footer :className="class" />
  </div>

</template>

<script setup lang="ts">
  import Header from '@components/Header.vue';
  import Footer from '@components/Footer.vue';
  defineProps<{ 
    title?:string
    logo:{
      url:string
      url2x:string
    }
    class:string
 }>()

</script>