<script setup lang="ts">
 import '@styles/header.scss';
 defineProps<{
    logo?:{
        url:string
        url2x:string
    }
    title?:string
    class: string
}>()
</script>

<template>
    <div class="header" :class="class">
        <div class="logo">
            <img src="/assets/logo.png" alt="" srcset="/assets/logo@2x.png 2x" />
        </div>
        <div class="title" v-if="title"  :text="title">{{ title }}</div>
        <div class="sub-logo" :class="title?``:`flex-grow` ">
            <img  :src="`/assets/` + logo?.url" alt="" :srcset="`/assets/`+ logo?.url2x + ` 2x`" />
        </div>
    </div>
</template>



