<script setup lang="ts">
 import '@styles/header.scss';
 import { isMobileDevice } from '@utils/help.ts';
 defineProps<{
    logo?:{
        url:string
        url2x:string
    }
    title?:string
    class?: string
}>()
</script>

<template>
    <div class="header" :class="class" @click="() => console.log(isMobileDevice())">
        <div class="logo" v-if="!(isMobileDevice() && $route.path !== '/')">
            <img src="/assets/logo.png" alt="" srcset="/assets/logo@2x.png 2x" />
        </div>
        <div class="title" v-if="title"  :text="title">{{ title }}</div>
       
        <div class="sub-logo" :class="title?``:`flex-grow` " v-if="(!(isMobileDevice() && !($route.path === '/life' || $route.path === '/people' || $route.path === '/rule')) && $route.path !== '/')" >
            <img  :src="`/assets/` + logo?.url" alt="" :srcset="`/assets/${logo?.url2x} 2x`" />
        </div>
    </div>
</template>



